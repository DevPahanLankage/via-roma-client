import Image from "next/image";
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-[#D2D7DF]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-primary"
            >
              Welcome to Via Roma
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl max-w-2xl mx-auto text-accent"
            >
              Discover our collection of luxury products crafted with excellence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-primary"
          >
            Featured Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group bg-[#D2D7DF] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-secondary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Featured Product {item}
                  </h3>
                  <p className="text-accent mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary text-white rounded-full hover:bg-accent transition-colors duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-[#D2D7DF] py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-accent mb-8 text-lg">
              Via Roma represents the pinnacle of luxury and craftsmanship. Our
              commitment to excellence and attention to detail ensures that each
              product meets the highest standards of quality.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-accent transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Store Locations Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-primary"
          >
            Visit Our Stores
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#D2D7DF] rounded-lg shadow-lg aspect-video mb-8" />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-accent transition-colors duration-300"
            >
              Find a Store
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
