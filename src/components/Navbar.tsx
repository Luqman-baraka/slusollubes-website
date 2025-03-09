
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slusollubes-black/95 backdrop-blur-sm py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-white font-heading text-2xl font-bold">
            SLUSOLLUBES
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link
            to="/products"
            className={`nav-link ${isActive("/products") ? "active" : ""}`}
          >
            Products
          </Link>
          <Link
            to="/distributors"
            className={`nav-link ${isActive("/distributors") ? "active" : ""}`}
          >
            Find a Distributor
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-slusollubes-black/95 absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[300px] border-b border-gray-800" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link
            to="/"
            className={`text-white hover:text-slusollubes-orange ${
              isActive("/") ? "text-slusollubes-orange" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-white hover:text-slusollubes-orange ${
              isActive("/products") ? "text-slusollubes-orange" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/distributors"
            className={`text-white hover:text-slusollubes-orange ${
              isActive("/distributors") ? "text-slusollubes-orange" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Find a Distributor
          </Link>
          <Link
            to="/about"
            className={`text-white hover:text-slusollubes-orange ${
              isActive("/about") ? "text-slusollubes-orange" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`text-white hover:text-slusollubes-orange ${
              isActive("/contact") ? "text-slusollubes-orange" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
