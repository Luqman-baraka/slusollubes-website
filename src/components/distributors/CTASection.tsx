
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
