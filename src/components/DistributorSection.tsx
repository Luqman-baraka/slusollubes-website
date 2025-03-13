
import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const DistributorSection = () => {
  const [location, setLocation] = useState("");

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slusollubes-black to-slusollubes-black/80"></div>
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl font-bold text-white font-heading mb-4">Find a Distributor</h2>
          <p className="text-lg text-gray-300 mb-10">
            Locate the nearest Slusollubes distributor in your area for quick and reliable access to our premium lubricant products.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-xl mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full pl-10 pr-4 py-3"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <Link to={`/distributors${location ? `?location=${encodeURIComponent(location)}` : ''}`} className="md:w-auto w-full shrink-0">
                <Button className="w-full bg-slusollubes-orange hover:bg-slusollubes-orange/90 text-white">
                  <Search className="mr-2 h-4 w-4" /> Find Nearest Dealer
                </Button>
              </Link>
            </div>
          </div>
          
          <Link to="/distributors" className="text-white hover:text-slusollubes-orange underline font-semibold transition-colors">
            View all distributor locations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DistributorSection;
