'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Product, ProductCategory, products, productCategories } from '@/types/products';
import Link from 'next/link';

// Common animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

const fadeInSide = {
  left: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true }
  },
  right: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true }
  }
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const productListRef = useRef<HTMLDivElement>(null);

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : [];

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Wait for state to update and component to render
    setTimeout(() => {
      productListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-[#D2D7DF] overflow-hidden">
        <Image
          src="/images/3d-rendering-modern-black-bathroom-with-luxury-tile-decor.jpg"
          alt="Luxury Bathware"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-8 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-light text-white tracking-wider"
            >
              Our Products
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light tracking-wide"
            >
              Premium bathware imported from world-renowned manufacturers
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light text-primary text-center mb-16"
          >
            Product Categories
          </motion.h2>
          <motion.h4
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-2xl font-light text-primary text-center mb-8"
          >
            Click To Select
          </motion.h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`
                  text-center space-y-4 cursor-pointer group
                  transition-all duration-500 ease-out
                  ${selectedCategory === category.id ? 'scale-[1.02]' : ''}
                `}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="aspect-[4/3] relative mb-6 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-light text-primary transition-colors duration-500 group-hover:text-accent">{category.title}</h3>
                <p className="text-accent">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product List */}
      {selectedCategory && (
        <section ref={productListRef} className="py-24 bg-white scroll-mt-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-16">
              <motion.h2
                {...fadeInUp}
                transition={{ duration: 0.6 }}
                className="text-4xl font-light text-primary"
              >
                {productCategories.find(cat => cat.id === selectedCategory)?.title}
              </motion.h2>
              {/* <button
                onClick={() => setSelectedCategory(null)}
                className="text-accent hover:text-primary transition-colors duration-300"
              >
                View All Categories
              </button> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group space-y-6"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-[#f5f5f5]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-primary transition-colors duration-500 group-hover:text-accent">
                      {product.name}
                    </h3>
                    <p className="text-accent">{product.description}</p>
                    
                    {/* Location Information */}
                    {product.locations && (
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-lg font-light text-primary mb-2">Available at</h4>
                        <div className="space-y-2 text-accent">
                          {product.locations.map((location, i) => (
                            <p key={i} className="flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              <span>{location}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.features && (
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-lg font-light text-primary mb-2">Features</h4>
                        <ul className="text-accent space-y-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.specifications && (
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-lg font-light text-primary mb-2">Specifications</h4>
                        <div className="text-accent space-y-2">
                          {Object.entries(product.specifications).map(([key, value], i) => (
                            <p key={i} className="flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              <span>{key}: {value}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                      <Link
                  href="/locations"
                  className="mt-8 block px-6 py-6 bg-primary text-white text-lg rounded-lg shadow-md hover:bg-primary-dark transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  Learn More
                </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quality Statement */}
      {/* <section className="relative h-[80vh]">
        <Image
          src="/images/bathware-showroom.jpg"
          alt="Quality Products"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div 
          {...fadeInUp}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Premium Quality</h2>
            <p className="text-xl text-white/90 font-light">
              We partner with world-renowned manufacturers to bring you the finest bathware products
            </p>
          </div>
        </motion.div>
      </section> */}
    </div>
  );
} 