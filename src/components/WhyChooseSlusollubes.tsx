
import { Droplet, DollarSign, Shield, Cog } from "lucide-react";

const features = [
  {
    title: "Reliable Performance",
    description: "Our lubricants are engineered to deliver consistent performance in even the most demanding conditions.",
    icon: Cog,
  },
  {
    title: "Cost-Effective Solutions",
    description: "Maximize equipment life and minimize downtime with our high-quality, long-lasting lubricants.",
    icon: DollarSign,
  },
  {
    title: "Wide Product Range",
    description: "From automotive to industrial applications, we offer specialized lubricants for every need.",
    icon: Droplet,
  },
  {
    title: "Trusted by Professionals",
    description: "Industry professionals across sectors rely on our products for their critical equipment.",
    icon: Shield,
  },
];

const WhyChooseSlusollubes = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-heading">Why Choose Slusollubes?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We pride ourselves on delivering premium quality lubricants that keep your machinery running smoothly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-slusollubes-orange/10 text-slusollubes-orange mb-6">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSlusollubes;
