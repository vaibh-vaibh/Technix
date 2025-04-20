import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { handleNavLinkClick } from '@/utils/scrollUtils';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-technix-dark">
            Technix<span className="text-technix-blue">CRM</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-gray-700 hover:text-technix-blue font-medium transition"
            onClick={(e) => handleNavLinkClick(e, 'features')}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="text-gray-700 hover:text-technix-blue font-medium transition"
            onClick={(e) => handleNavLinkClick(e, 'pricing')}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-700 hover:text-technix-blue font-medium transition"
            onClick={(e) => handleNavLinkClick(e, 'testimonials')}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-technix-blue font-medium transition"
            onClick={(e) => handleNavLinkClick(e, 'contact')}
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{user.email}</span>
              </div>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="font-medium">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-technix-blue hover:bg-blue-600 transition font-medium">
                  Get Started Free
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 py-2 font-medium" 
              onClick={(e) => handleNavLinkClick(e, 'features', toggleMenu)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 py-2 font-medium" 
              onClick={(e) => handleNavLinkClick(e, 'pricing', toggleMenu)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 py-2 font-medium" 
              onClick={(e) => handleNavLinkClick(e, 'testimonials', toggleMenu)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 py-2 font-medium" 
              onClick={(e) => handleNavLinkClick(e, 'contact', toggleMenu)}
            >
              Contact
            </a>
            {user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{user.email}</span>
                </div>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full font-medium">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup" onClick={toggleMenu}>
                  <Button className="w-full bg-technix-blue hover:bg-blue-600 transition font-medium">
                    Get Started Free
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
