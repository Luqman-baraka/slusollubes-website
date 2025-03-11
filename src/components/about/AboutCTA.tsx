
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading animate-on-scroll">
          Ready to Experience Premium Lubricant Solutions?
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto animate-on-scroll" style={{ animationDelay: "0.2s" }}>
          Discover how Slusollubes can help your business thrive. Explore our products or get in touch with us today!
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
          <Link to="/products" className="btn-primary flex items-center gap-2 group">
            View Products
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
