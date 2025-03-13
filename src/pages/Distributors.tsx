
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { distributors } from "@/data/distributors";
import HeroSection from "@/components/distributors/HeroSection";
import SearchSection from "@/components/distributors/SearchSection";
import DistributorsResults from "@/components/distributors/DistributorsResults";
import RegionsCoveredSection from "@/components/distributors/RegionsCoveredSection";
import CTASection from "@/components/distributors/CTASection";

const Distributors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [viewType, setViewType] = useState<"list" | "map">("list");

  // Filter distributors based on search query and selected region
  const filteredDistributors = distributors.filter((distributor) => {
    const matchesSearch = searchQuery === "" || 
      distributor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      distributor.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = selectedRegion === "all" || distributor.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <HeroSection />
        
        <SearchSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          viewType={viewType}
          setViewType={setViewType}
        />
        
        <DistributorsResults 
          filteredDistributors={filteredDistributors}
          viewType={viewType}
        />
        
        <RegionsCoveredSection />
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Distributors;
