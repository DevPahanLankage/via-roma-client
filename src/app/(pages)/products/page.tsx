'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

      {/* Featured Product */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInSide.left}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-light text-primary">Luxury Sanitary Ware</h2>
              <div className="space-y-4 text-accent">
                <p className="text-lg">
                  Experience unparalleled quality and design in our premium sanitary ware collection.
                </p>
                <ul className="space-y-2">
                  <li>• Premium quality materials</li>
                  <li>• Contemporary designs</li>
                  <li>• Water-efficient technology</li>
                  <li>• Easy maintenance</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              {...fadeInSide.right}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/bathroom-sink-hotel-room.jpg"
                alt="Luxury Sanitary Ware"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light text-primary text-center mb-16"
          >
            Product Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Bathroom Fittings",
                description: "Premium taps, showers, and mixers from leading brands",
                image: "/images/bathroom-rub.jpg"
              },
              {
                title: "Sanitary Ware",
                description: "High-quality toilets, basins, and bidets",
                image: "/images/aesthetic-bathroom.jpg"
              },
              {
                title: "Accessories",
                description: "Elegant bathroom accessories and fixtures",
                image: "/images/small-bathroom-with-modern-style-ai-generated.jpg"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="aspect-[4/3] relative mb-6">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light text-primary">{category.title}</h3>
                <p className="text-accent">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="relative h-[80vh]">
        <Image
          src="/images/ripples-towcester-showroom.jpg"
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
      </section>
    </div>
  );
} 