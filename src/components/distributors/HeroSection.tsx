
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-80 md:h-96 bg-slusollubes-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slusollubes-black to-slusollubes-black/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070')] bg-cover bg-center opacity-40"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-4">
          Find a Slusollubes Distributor Near You
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl">
          Locate our trusted distributors across Kenya for quick and reliable service.
        </p>
        <div className="flex space-x-4">
          <Button 
            onClick={() => document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-slusollubes-orange hover:bg-slusollubes-orange/90 text-white"
          >
            <Search className="mr-2 h-4 w-4" /> Search Distributors
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white hover:text-slusollubes-black"
            onClick={() => document.getElementById("regions-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MapPin className="mr-2 h-4 w-4" /> View All Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
