
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import MissionVision from "@/components/about/MissionVision";
import History from "@/components/about/History";
import Founders from "@/components/about/Founders";
import Capabilities from "@/components/about/Capabilities";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <AboutHero />
        <AboutIntro />
        <MissionVision />
        <History />
        <Founders />
        <Capabilities />
        <AboutCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
