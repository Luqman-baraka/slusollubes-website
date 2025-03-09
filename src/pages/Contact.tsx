
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 font-heading">Contact Us</h1>
        </div>
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
