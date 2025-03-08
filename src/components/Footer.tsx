
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import Container from './ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-luxe-950 text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-medium mb-4">
              Walpole <span className="text-gold">Summit</span>
            </h3>
            <p className="text-luxe-300">
              The premier gathering for British luxury leaders, exploring the evolving landscape of global luxury.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gold mr-3 mt-0.5" />
                <span className="text-luxe-300">info@walpolesummit.co.uk</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gold mr-3 mt-0.5" />
                <span className="text-luxe-300">+44 (0)20 7798 8988</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-0.5" />
                <span className="text-luxe-300">
                  1 Buckingham Palace Road<br />
                  London SW1W 0QP
                </span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-luxe-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-luxe-300 hover:text-white transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-luxe-300 hover:text-white transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#venue" className="text-luxe-300 hover:text-white transition-colors">
                  Venue
                </a>
              </li>
              <li>
                <a href="#partners" className="text-luxe-300 hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-luxe-700 text-luxe-300 hover:text-white hover:border-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-luxe-700 text-luxe-300 hover:text-white hover:border-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-luxe-700 text-luxe-300 hover:text-white hover:border-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-block px-4 py-2 border border-gold text-gold font-medium hover:bg-gold hover:text-white transition-all"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-luxe-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxe-400 text-sm">
            &copy; {currentYear} Walpole. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-luxe-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-luxe-400 hover:text-white text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="text-luxe-400 hover:text-white text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
