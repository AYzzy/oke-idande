
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaTiktok } from 'react-icons/fa'; // Add this import

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-church-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/pictures/8e58092f-667b-4d1a-a2d3-16c4ed8ff02d.png"
                alt="Church Logo" 
                className="h-16 w-auto" 
              />
              <div>
                <h3 className="font-bold text-lg">World Soul Winning</h3>
                <p className="text-sm text-gray-300">Evangelistic Ministry</p>
              </div>
            </div>
            <p className="mb-4 text-gray-300">
              Spreading the Gospel worldwide with the eagerness of God.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/OKEIDANDEMEDIA/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="hover:text-church-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/oke_idande_media/" target="_blank" rel="noopener noreferrer" className="hover:text-church-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-church-red transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.tiktok.com/@oke.idande.media" target="_blank" rel="noopener noreferrer" className="hover:text-church-red transition-colors">
                <FaTiktok size={20} />
              </a>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <a href="https://okimedia.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/pictures/oke-idande media logo 2bw copy.png" 
                  alt="Oki Media Logo" 
                  className="h-16 w-auto"
                />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-church-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:text-church-red transition-colors">Ministries</Link>
              </li>
              <li>
                <Link to="/sermons" className="hover:text-church-red transition-colors">Sermons</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-church-red transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-church-red transition-colors">Donate</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-church-red transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>23, Rami Olademeji street, Ebutte-Meta(West)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>(+234) 9059624483</span>
                <span>(+234) 9030119087</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>cacwosemokeidande@gmail.com</span>
              </div>
              <div>
                <h4 className="font-semibold mt-4 mb-2">Service Times:</h4>
                <p className="text-gray-300">Sunday: 9:00 AM & 12:00 pm</p>
                <p className="text-gray-300">Wednesday: 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} World Soul Winning Evangelistic Ministry. All Rights Reserved.
          </p>
          <p className="mt-2">
            <span className="scripture-quote">"Thy word is a lamp unto my feet" - Psalms 119:105</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
