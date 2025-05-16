import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/pictures/chad-kirchoff-ivqGyYLtBI8-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              World Soul Winning <span className="text-church-red">Evangelistic Ministry</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-light max-w-2xl mx-auto md:mx-0 drop-shadow">
              Spreading the Gospel worldwide with the eagerness of God to transform lives through faith.
            </p>
            <p className="text-xl italic mb-8 font-semibold text-gray-200 drop-shadow">
              "Go ye into the world and preach the gospel" - Mark 16:15
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-church-red hover:bg-opacity-90">
                <Link to="/about">Learn More</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-church-navy"
              >
                <Link to="/contact">Visit Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
