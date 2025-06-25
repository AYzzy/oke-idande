import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MinistrySection from "../components/MinistrySection";

const Ministries = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-church-navy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Ministries</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover the many ways you can serve, grow, and connect in our church community.
            </p>
          </div>
        </div>
        
        <MinistrySection />
      </main>
      <Footer />
    </div>
  );
};

export default Ministries;