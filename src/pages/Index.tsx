import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
