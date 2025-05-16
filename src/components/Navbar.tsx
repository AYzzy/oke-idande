
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="public/pictures/8e58092f-667b-4d1a-a2d3-16c4ed8ff02d.png" 
              alt="World Soul Winning Evangelistic Ministry" 
              className="h-12 w-auto"
            />
            <span className="text-church-navy font-bold hidden md:block">World Soul Winning</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium">
            About
          </Link>
          <Link to="/ministries" className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium">
            Ministries
          </Link>
          <Link to="/sermons" className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium">
            Sermons
          </Link>
          <Link to="/events" className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium">
            Events
          </Link>
          <Link to="/contact" className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium">
            Contact
          </Link>
          <Button className="bg-church-red hover:bg-opacity-90 ml-2">
            Donate
          </Button>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-church-navy focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/ministries" 
              className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ministries
            </Link>
            <Link 
              to="/sermons" 
              className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sermons
            </Link>
            <Link 
              to="/events" 
              className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/contact" 
              className="text-church-navy hover:text-church-red transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-church-red hover:bg-opacity-90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
