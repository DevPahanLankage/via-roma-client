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

export default function LocationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-[#D2D7DF] overflow-hidden">
        <Image
          src="/images/ripples-towcester-showroom.jpg"
          alt="Our Showroom"
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
              Our Locations
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light tracking-wide"
            >
              Visit our showrooms to experience our premium collections
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Showroom */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInSide.left}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-light text-primary">Main Showroom</h2>
              <div className="space-y-4 text-accent">
                <p className="text-lg">
                  Our flagship showroom features our complete range of premium bathware products.
                </p>
                <div className="space-y-2">
                  <p>123 Sample Street</p>
                  <p>Colombo 03, Sri Lanka</p>
                  <p>Open Monday - Saturday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeInSide.right}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/3d-rendering-modern-black-bathroom-with-luxury-tile-decor.jpg"
                alt="Main Showroom"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Center */}
      <section className="relative h-[80vh]">
        <Image
          src="/images/aesthetic-bathroom.jpg"
          alt="Experience Center"
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
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Experience Center</h2>
            <p className="text-xl text-white/90 font-light">
              Visit our experience center to see our products in realistic bathroom settings
            </p>
          </div>
        </motion.div>
      </section>

      {/* Partner Locations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light text-primary text-center mb-16"
          >
            Partner Locations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Colombo Branch",
                address: "456 Example Road, Colombo 05",
                image: "/images/bathroom-sink-hotel-room.jpg"
              },
              {
                title: "Kandy Branch",
                address: "789 Sample Avenue, Kandy",
                image: "/images/bathroom-rub.jpg"
              },
              {
                title: "Galle Branch",
                address: "321 Test Lane, Galle",
                image: "/images/small-bathroom-with-modern-style-ai-generated.jpg"
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="aspect-[4/3] relative mb-6">
                  <Image
                    src={location.image}
                    alt={location.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light text-primary">{location.title}</h3>
                <p className="text-accent">{location.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 