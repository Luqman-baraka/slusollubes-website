
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-slusollubes-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/60"></div>
        {/* We'd use a real hero image here in production */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635280408195-37651a7d394e?q=80&w=2070')] bg-cover bg-center opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-32 mt-16">
        <div className="max-w-4xl animate-fade-down">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-slusollubes-orange/20 border border-slusollubes-orange/30">
            <span className="text-slusollubes-orange font-semibold tracking-wide">Premium Lubricants</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
            Performance You Can Trust – <br />
            <span className="text-slusollubes-orange">Premium Lubricants</span> for Every Industry.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Engineered to deliver exceptional protection and performance in the most demanding applications across automotive, agricultural, industrial, and construction sectors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary flex items-center gap-2 group">
              Explore Our Products
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/distributors" className="btn-outline">
              Find a Distributor
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
