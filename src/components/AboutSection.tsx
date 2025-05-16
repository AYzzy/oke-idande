
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 b g-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">About Our Ministry</h2>
          <div className="w-20 h-1 bg-church-red mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-church-navy">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              World Soul Winning Evangelistic Ministry is dedicated to spreading the good news of Jesus Christ 
              throughout the world. We believe in the power of God's Word to transform lives and communities.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-church-navy">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To reach the unreached with the Gospel of Christ, equip believers for spiritual growth, 
              and establish churches that will continue the Great Commission in their communities.
            </p>
            
            <div className="scripture-quote bg-gray-100 p-6 rounded-lg border-l-4 border-church-red mb-6">
              <p className="text-lg italic text-gray-800">
                "Thy word is a lamp unto my feet, and a light unto my path."
              </p>
              <p className="text-right font-semibold text-church-navy mt-2">- Psalms 119:105</p>
            </div>
            
            <Button asChild className="bg-church-red hover:bg-opacity-90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-church-red">
              <h4 className="font-semibold text-xl mb-3 text-church-navy">Our Core Values</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-church-red mr-2">•</span> 
                  <span>Biblical authority and teaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-red mr-2">•</span> 
                  <span>Passionate worship and prayer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-red mr-2">•</span> 
                  <span>Global evangelism and missions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-red mr-2">•</span> 
                  <span>Discipleship and spiritual growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-church-red mr-2">•</span> 
                  <span>Community service and compassion</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-church-navy">
              <h4 className="font-semibold text-xl mb-3 text-church-navy">Join Our Community</h4>
              <p className="text-gray-700 mb-4">
                We invite you to be part of our church family. Whether you're seeking spiritual guidance or 
                looking for a community of believers, there's a place for you at World Soul Winning Evangelistic Ministry.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="border-church-navy text-church-navy hover:bg-church-navy hover:text-white">
                  <Link to="/services">Service Times</Link>
                </Button>
                <Button asChild className="bg-church-red hover:bg-opacity-90">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
