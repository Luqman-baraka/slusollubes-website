
import { Phone, Mail, MapPin, ExternalLink, MessageSquare, Check } from "lucide-react";
import { Distributor } from "@/data/distributors";
import { Button } from "@/components/ui/button";

interface DistributorListProps {
  distributors: Distributor[];
}

const DistributorList = ({ distributors }: DistributorListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {distributors.map((distributor) => (
        <div 
          key={distributor.id}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="bg-slusollubes-orange/10 p-4 border-b border-gray-200">
            <h3 className="font-heading font-bold text-xl">{distributor.name}</h3>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-slusollubes-orange" />
              <span>{distributor.location}</span>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-gray-700 mb-4">{distributor.address}</p>
            
            <div className="space-y-2 mb-4">
              <a 
                href={`tel:${distributor.phone}`} 
                className="flex items-center text-gray-700 hover:text-slusollubes-orange"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>{distributor.phone}</span>
              </a>
              
              <a 
                href={`mailto:${distributor.email}`} 
                className="flex items-center text-gray-700 hover:text-slusollubes-orange"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>{distributor.email}</span>
              </a>
              
              {distributor.whatsapp && (
                <a 
                  href={`https://wa.me/${distributor.whatsapp.replace(/\D/g, '')}`}
                  className="flex items-center text-gray-700 hover:text-slusollubes-orange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>WhatsApp: {distributor.whatsapp}</span>
                </a>
              )}
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Services:</h4>
              <ul className="space-y-1">
                {distributor.services.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="h-4 w-4 mr-2 text-slusollubes-orange" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${distributor.coordinates.lat},${distributor.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="w-full border-slusollubes-orange text-slusollubes-orange hover:bg-slusollubes-orange hover:text-white"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DistributorList;
