
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { ArrowDown } from "lucide-react";

const Contact = () => {
  const scrollToContactForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-slusollubes-black/90 to-slusollubes-black/80 flex items-center">
          <div className="absolute inset-0 z-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading animate-fade-down">
                Contact Slusollubes – We're Here to Help
              </h1>
              <p className="text-xl mb-8 text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Reach out to us for inquiries, support, or partnerships.
              </p>
              <button 
                onClick={scrollToContactForm}
                className="btn-primary animate-fade-up flex items-center gap-2"
                style={{ animationDelay: "0.4s" }}
              >
                Send a Message
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
