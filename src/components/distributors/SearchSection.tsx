
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { regions } from "@/data/distributors";

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  viewType: "list" | "map";
  setViewType: (type: "list" | "map") => void;
}

const SearchSection = ({
  searchQuery,
  setSearchQuery,
  selectedRegion,
  setSelectedRegion,
  viewType,
  setViewType
}: SearchSectionProps) => {
  return (
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
  );
};

export default SearchSection;
