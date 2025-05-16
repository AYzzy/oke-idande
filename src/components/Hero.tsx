
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-church-navy via-church-navy to-black text-white">
      {/* Background Overlay with Subtle Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              World Soul Winning <span className="text-church-red">Evangelistic Ministry</span>
            </h1>
            <p className="text-xl mb-6 opacity-90 max-w-md">
              Spreading the Gospel worldwide with the eagerness of God to transform lives through faith.
            </p>
            <p className="text-lg italic mb-8 scripture-quote">
              "Go ye into the world and preach the gospel" - Mark 16:15
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-church-red hover:bg-opacity-90">
                <Link to="/about">Learn More</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-church-navy">
                <Link to="/contact">Visit Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="public/pictures/8e58092f-667b-4d1a-a2d3-16c4ed8ff02d.png" 
              alt="World Soul Winning Evangelistic Ministry" 
              className="max-w-full rounded-lg shadow-2xl h-auto md:max-h-[400px] animate-[pulse_5s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
