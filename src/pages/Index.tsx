
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import WhyChooseSlusollubes from "@/components/WhyChooseSlusollubes";
import DistributorSection from "@/components/DistributorSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ProductHighlights />
        <WhyChooseSlusollubes />
        <DistributorSection />
        <Testimonials />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
