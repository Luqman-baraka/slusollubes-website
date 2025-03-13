
import DistributorMap from "@/components/DistributorMap";
import DistributorList from "@/components/DistributorList";
import { Distributor } from "@/data/distributors";

interface DistributorsResultsProps {
  filteredDistributors: Distributor[];
  viewType: "list" | "map";
}

const DistributorsResults = ({ 
  filteredDistributors, 
  viewType 
}: DistributorsResultsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-8 text-center">
          Our Distributor Network
        </h2>
        
        {viewType === "map" ? (
          <DistributorMap distributors={filteredDistributors} />
        ) : (
          <DistributorList distributors={filteredDistributors} />
        )}
        
        {filteredDistributors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-4">No distributors found matching your criteria.</p>
            <p className="text-gray-500">Try adjusting your search or browse all locations below.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DistributorsResults;
