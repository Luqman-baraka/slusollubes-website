
import { useEffect, useRef, useState } from "react";
import { Distributor } from "@/data/distributors";
import { Button } from "@/components/ui/button";

interface DistributorMapProps {
  distributors: Distributor[];
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const DistributorMap = ({ distributors }: DistributorMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedDistributor, setSelectedDistributor] = useState<Distributor | null>(null);

  useEffect(() => {
    // This is a placeholder for map integration
    // In a real implementation, you would load Google Maps API and initialize the map
    
    const loadGoogleMapsScript = () => {
      // Simulate map loading
      setTimeout(() => {
        setMapLoaded(true);
        console.log("Map would load here in a real implementation");
      }, 1000);
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
      <div className="flex flex-col lg:flex-row">
        {/* Distributor list sidebar */}
        <div className="w-full lg:w-1/3 border-r border-gray-200 overflow-y-auto" style={{ maxHeight: "600px" }}>
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-heading font-bold">All Distributors</h3>
            <p className="text-sm text-gray-500">Click on a distributor to see details</p>
          </div>
          <div className="divide-y divide-gray-200">
            {distributors.map((distributor) => (
              <div 
                key={distributor.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedDistributor?.id === distributor.id ? "bg-slusollubes-orange/10" : ""
                }`}
                onClick={() => setSelectedDistributor(distributor)}
              >
                <h4 className="font-medium">{distributor.name}</h4>
                <p className="text-sm text-gray-600">{distributor.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map section */}
        <div className="w-full lg:w-2/3">
          {!mapLoaded ? (
            <div className="flex items-center justify-center h-[500px] bg-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-slusollubes-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading map...</p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div 
                ref={mapRef} 
                className="h-[500px] bg-gray-200 flex items-center justify-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=2069')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.7
                }}
              >
                <div className="text-center p-6 bg-white bg-opacity-80 rounded-lg max-w-md">
                  <h3 className="font-heading font-bold text-lg mb-2">Map Placeholder</h3>
                  <p className="text-gray-700 mb-4">
                    In a real implementation, this would be an interactive Google Map showing all distributor locations.
                  </p>
                  <p className="text-sm text-gray-600">
                    Users would be able to click on map pins to see distributor details and get directions.
                  </p>
                </div>
              </div>

              {selectedDistributor && (
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-md border-t border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading font-bold">{selectedDistributor.name}</h3>
                      <p className="text-gray-600 text-sm">{selectedDistributor.address}</p>
                      <p className="text-gray-600 text-sm mt-1">{selectedDistributor.phone}</p>
                    </div>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${selectedDistributor.coordinates.lat},${selectedDistributor.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="text-slusollubes-orange border-slusollubes-orange hover:bg-slusollubes-orange hover:text-white">
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DistributorMap;
