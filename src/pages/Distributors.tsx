
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Distributors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 font-heading">Find a Distributor</h1>
            <p className="text-lg mb-8">
              This page will provide a distributor locator map and search 
              functionality. Coming soon!
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Distributors;
