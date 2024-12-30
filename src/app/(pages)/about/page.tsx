export default function AboutPage() {
  return (
    <div className="bg-[#D2D7DF]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-primary">About Via Roma</h1>
            
            {/* Hero image placeholder */}
            <div className="w-full aspect-video rounded-lg mb-8 overflow-hidden bg-secondary/10">
              <div className="w-full h-full bg-secondary/20 animate-pulse" />
            </div>
            
            <div className="prose lg:prose-xl">
              <p className="text-lg text-accent mb-6">
                Welcome to Via Roma, where tradition meets innovation in the world of
                luxury products. Our journey began with a simple vision: to provide
                exceptional quality and unparalleled craftsmanship to our discerning
                customers.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Story</h2>
              <p className="text-accent mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Values</h2>
              <ul className="list-disc list-inside text-accent mb-6 space-y-2">
                <li>Quality and Excellence</li>
                <li>Customer Satisfaction</li>
                <li>Innovation and Tradition</li>
                <li>Sustainability</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Commitment</h2>
              <p className="text-accent">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 