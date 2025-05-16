
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-church-red text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZsLTYgNi02LTYtNiA2aC02bDYtNi02LTZoNmw2IDYgNi02IDYgNmg2bC02IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Spreading the Gospel</h2>
          <p className="text-xl mb-8 opacity-90">
            "Go ye into all the world, and preach the gospel to every creature." - Mark 16:15
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Support Our Mission</h3>
              <p className="mb-4">
                Your generous donations help us reach more souls with the message of God's love and salvation.
              </p>
              <Button asChild variant="secondary" className="w-full bg-white text-church-red hover:bg-opacity-90">
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Volunteer With Us</h3>
              <p className="mb-4">
                Share your time and talents to help build God's kingdom. There are many ways you can serve.
              </p>
              <Button asChild variant="secondary" className="w-full bg-white text-church-red hover:bg-opacity-90">
                <Link to="/volunteer">Get Involved</Link>
              </Button>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white border-opacity-20">
            <p className="mb-6">
              Have questions about our ministry or how you can get involved?
            </p>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-church-red">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
