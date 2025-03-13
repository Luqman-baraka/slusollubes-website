
import { MapPin } from "lucide-react";
import { regions } from "@/data/distributors";

const RegionsCoveredSection = () => {
  return (
    <section id="regions-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">
          Regions We Cover
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {regions.map((region) => (
            <div 
              key={region}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-slusollubes-orange/10 flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6 text-slusollubes-orange" />
              </div>
              <h3 className="font-heading font-semibold">{region}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsCoveredSection;
