export default function ProductsPage() {
  return (
    <div className="bg-[#D2D7DF]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-primary">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-secondary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Product {item}
                </h3>
                <p className="text-accent mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-accent transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 