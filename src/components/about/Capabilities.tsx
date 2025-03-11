
import { 
  Award, 
  Factory, 
  Globe, 
  Truck, 
  Droplet 
} from "lucide-react";

const capabilities = [
  {
    icon: <Droplet size={36} className="text-slusollubes-orange" />,
    title: "High-Quality Products",
    description: "Blended from premium base oils and additives sourced from global leaders like Shell International, Chevron, and Afton."
  },
  {
    icon: <Award size={36} className="text-slusollubes-orange" />,
    title: "ISO 9000-Certified Blending Plant",
    description: "Ensuring top-tier quality and reliability across our entire product range."
  },
  {
    icon: <Globe size={36} className="text-slusollubes-orange" />,
    title: "Global Partnerships",
    description: "Collaboration with Libya Oil and world-class manufacturers in Europe and Asia."
  },
  {
    icon: <Factory size={36} className="text-slusollubes-orange" />,
    title: "State-of-the-Art Facilities",
    description: "Modern manufacturing facilities with stringent quality control processes."
  },
  {
    icon: <Truck size={36} className="text-slusollubes-orange" />,
    title: "Extensive Distribution Network",
    description: "Warehouses in Mombasa, Nairobi, and Kisumu, with agents across East Africa."
  }
];

const Capabilities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-heading">
          Our Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow animate-on-scroll"
            >
              <div className="mb-4">{capability.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-heading">{capability.title}</h3>
              <p className="text-gray-700">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
