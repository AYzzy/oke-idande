import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import SermonsSection from "../components/SermonsSection";
import EventsSection from "../components/EventsSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <SermonsSection />
        <EventsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;