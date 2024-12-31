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

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-[#D2D7DF] overflow-hidden">
        <Image
          src="/images/bathware-showroom.jpg"
          alt="About Via Roma"
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
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light tracking-wide"
            >
              Your trusted partner in luxury bathware
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInSide.left}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-light text-primary">Our Story</h2>
              <div className="space-y-4 text-accent">
                <p className="text-lg">
                  Via Roma has established itself as a leading importer and supplier of premium bathware in Sri Lanka. Our commitment to quality and service has made us the preferred choice for luxury developments and high-end projects.
                </p>
                <p className="text-lg">
                  We work directly with renowned manufacturers to bring you the finest bathroom products, ensuring that each piece meets our exacting standards for quality and design.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeInSide.right}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/3d-rendering-modern-black-bathroom-with-luxury-tile-decor.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light text-primary text-center mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Quality",
                description: "We source only the finest products from trusted manufacturers",
                image: "/images/bathroom-sink-hotel-room.jpg"
              },
              {
                title: "Service",
                description: "Dedicated support from selection to after-sales care",
                image: "/images/bathroom-rub.jpg"
              },
              {
                title: "Innovation",
                description: "Bringing the latest bathroom technology to Sri Lanka",
                image: "/images/small-bathroom-with-modern-style-ai-generated.jpg"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="aspect-[4/3] relative mb-6">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light text-primary">{value.title}</h3>
                <p className="text-accent">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="relative h-[80vh]">
        <Image
          src="/images/aesthetic-bathroom.jpg"
          alt="Our Vision"
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
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Our Vision</h2>
            <p className="text-xl text-white/90 font-light">
              To be the leading supplier of premium bathware in Sri Lanka, setting new standards in quality and design
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 