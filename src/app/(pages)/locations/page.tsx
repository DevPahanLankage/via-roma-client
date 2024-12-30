export default function LocationsPage() {
  return (
    <div className="bg-[#D2D7DF]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-primary">Our Locations</h1>
        
        {/* Map placeholder */}
        <div className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden">
          <div className="w-full h-[400px] bg-secondary/10 relative">
            <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location cards */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Store Location {item}
                </h3>
                <div className="space-y-3 text-accent">
                  <p>123 Example Street</p>
                  <p>City, State 12345</p>
                  <p>Phone: (123) 456-7890</p>
                  <div className="pt-4">
                    <p className="font-semibold text-primary mb-2">Hours:</p>
                    <p className="text-accent-light">
                      Mon-Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat: 10:00 AM - 4:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                  <button className="mt-6 w-full px-4 py-2 bg-primary text-white rounded-full hover:bg-accent transition-colors duration-300">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 