'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-[#D2D7DF] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
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
              Via Roma Trading
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light tracking-wide"
            >
              Premier Importer and Supplier of Luxury Bathware in Sri Lanka
            </motion.p>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 inset-x-0 mx-auto text-center text-white w-full pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, 8, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="flex flex-col items-center"
          >
            <p className="text-sm font-light tracking-widest mb-4">
              SCROLL TO EXPLORE
            </p>
            <div className="w-5 h-8 border border-white rounded-full relative">
              <motion.div 
                animate={{ 
                  y: [-8, 8, -8]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                className="absolute h-1 w-1 bg-white rounded-full left-[7px]"
                style={{ 
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light text-primary text-center mb-16"
          >
            Our Collections
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <div className="aspect-[4/3] relative mb-6">
                <Image
                  src="/images/aesthetic-bathroom.jpg"
                  alt="Sanitary Ware"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-light text-primary">Sanitary Ware</h3>
              <p className="text-accent">
                Premium quality toilets, basins, and bidets from leading manufacturers
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center space-y-4"
            >
              <div className="aspect-[4/3] relative mb-6">
                <Image
                  src="/images/bathroom-rub.jpg"
                  alt="Fittings & Fixtures"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-light text-primary">Fittings & Fixtures</h3>
              <p className="text-accent">
                Elegant taps, showers, and bathroom accessories
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center space-y-4"
            >
              <div className="aspect-[4/3] relative mb-6">
                <Image
                  src="/images/small-bathroom-with-modern-style-ai-generated.jpg"
                  alt="Complete Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-light text-primary">Complete Solutions</h3>
              <p className="text-accent">
                Full bathroom solutions for commercial projects
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="relative h-[80vh]">
        <Image
          src="/images/3d-rendering-modern-black-bathroom-with-luxury-tile-decor.jpg"
          alt="Luxury Bathroom Design"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Premium Quality</h2>
            <p className="text-xl text-white/90 font-light">
              We import only the finest bathware products from renowned international manufacturers
            </p>
          </div>
        </motion.div>
      </section>

      {/* Business Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-light text-primary">Why Choose Us</h2>
              <p className="text-lg text-accent">
                As Sri Lanka's trusted bathware supplier, we provide premium products and reliable service to leading retailers and developers.
              </p>
              <ul className="space-y-4 text-accent">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span>Direct imports from premium manufacturers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span>Competitive wholesale pricing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span>Reliable after-sales support</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/bathware-showroom.jpg"
                alt="Our Showroom"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl font-light text-primary">Visit Our Showroom</h2>
            <p className="text-lg text-accent">
              Experience our premium collections in person and discuss your requirements with our team
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white hover:bg-accent transition-colors duration-300 text-lg"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
