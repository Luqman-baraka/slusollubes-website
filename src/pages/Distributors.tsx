
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DistributorMap from "@/components/DistributorMap";
import DistributorList from "@/components/DistributorList";
import { MapPin, Search, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { distributors, regions } from "@/data/distributors";
import { Link } from "react-router-dom";

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
        {/* Hero Section */}
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

        {/* Search Section */}
        <section id="search-section" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-heading font-bold mb-6 text-center">Search For Distributors</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter your location (e.g., Nairobi, Kisumu, Mombasa)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="w-full md:w-48">
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>{region}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  className="bg-slusollubes-orange hover:bg-slusollubes-orange/90 text-white"
                  onClick={() => {
                    console.log("Search with:", { searchQuery, selectedRegion });
                  }}
                >
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>

              <div className="mt-8 flex justify-center space-x-4">
                <Button
                  variant={viewType === "list" ? "default" : "outline"}
                  onClick={() => setViewType("list")}
                  className={viewType === "list" ? "bg-slusollubes-orange hover:bg-slusollubes-orange/90 text-white" : ""}
                >
                  List View
                </Button>
                <Button
                  variant={viewType === "map" ? "default" : "outline"}
                  onClick={() => setViewType("map")}
                  className={viewType === "map" ? "bg-slusollubes-orange hover:bg-slusollubes-orange/90 text-white" : ""}
                >
                  Map View
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Distributor Results Section */}
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

        {/* Regions Covered Section */}
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

        {/* CTA Section */}
        <section className="py-16 bg-slusollubes-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Can't find a distributor near you?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us directly, and we'll help you locate one or explore opportunities to become a distributor!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link to="/contact" className="w-full">
                <Button className="w-full bg-slusollubes-orange hover:bg-slusollubes-orange/90 text-white">
                  <Phone className="mr-2 h-4 w-4" /> Contact Us
                </Button>
              </Link>
              <Link to="/contact" className="w-full">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-slusollubes-black">
                  <Mail className="mr-2 h-4 w-4" /> Become a Distributor
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Distributors;
