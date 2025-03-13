
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import WhyChooseSlusollubes from "@/components/WhyChooseSlusollubes";
import DistributorSection from "@/components/DistributorSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ProductHighlights />
        <WhyChooseSlusollubes />
        <DistributorSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
