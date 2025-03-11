
import { Droplet } from "lucide-react";

const AboutIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Droplet size={48} className="text-slusollubes-orange" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-on-scroll">
            Founded in 2011, Slusollubes (Synergy Lubricant Solutions Limited) is a leading provider 
            of high-quality lubricants and oil solutions, serving industries across East Africa. 
            Our mission is to deliver innovative lubricant solutions that reduce maintenance costs, 
            enhance operational efficiency, and promote sustainability.
          </p>
          <div className="w-20 h-1 bg-slusollubes-orange mx-auto mt-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
