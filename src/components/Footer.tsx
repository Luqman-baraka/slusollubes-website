
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slusollubes-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">SLUSOLLUBES</h3>
            <p className="text-gray-300 mb-4">
              Premium lubricants for automotive, agricultural, industrial, and construction applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-300 hover:text-slusollubes-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-300 hover:text-slusollubes-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-300 hover:text-slusollubes-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-300 hover:text-slusollubes-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-slusollubes-orange transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/distributors" className="text-gray-300 hover:text-slusollubes-orange transition-colors">
                  Find a Distributor
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-slusollubes-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-slusollubes-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>SYNERGY LUBRICANT SOLUTIONS LTD</p>
              <p>UNIT 3, KENROID COMPLEX, IMARA DAIMA</p>
              <p>TELGA LORUPE ROAD OFF MOMBASA ROAD</p>
              <p className="pt-2">
                <a href="tel:+254736210100" className="hover:text-slusollubes-orange transition-colors">
                  MOBILE: (+254) 736 210 100
                </a>
              </p>
              <p>
                <a href="https://wa.me/254748200101" className="hover:text-slusollubes-orange transition-colors">
                  WHATSAPP: (+254) 748 200 101
                </a>
              </p>
              <p>
                <a href="mailto:info@slusollubes.com" className="hover:text-slusollubes-orange transition-colors">
                  EMAIL: info@slusollubes.com
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter (future functionality) */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest product updates and industry news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-slusollubes-orange"
              />
              <button
                type="button"
                className="bg-slusollubes-orange text-white px-4 py-2 rounded-r-lg font-semibold transition-all hover:bg-opacity-90"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Slusollubes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-slusollubes-orange transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-slusollubes-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
