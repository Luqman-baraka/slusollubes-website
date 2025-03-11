
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-slusollubes-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70"></div>
        {/* We'd use a real image in production */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531141445733-14c2eb7d4c1f?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 py-32 mt-16">
        <div className="max-w-4xl animate-fade-down">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-slusollubes-orange/20 border border-slusollubes-orange/30">
            <span className="text-slusollubes-orange font-semibold tracking-wide">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
            About Slusollubes – <br />
            <span className="text-slusollubes-orange">Innovating Lubricant Solutions</span> Since 2011
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Reducing Costs, Enhancing Efficiency, Protecting the Environment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary flex items-center gap-2 group">
              Explore Our Products
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default AboutHero;
