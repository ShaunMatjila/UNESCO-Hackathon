import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Learn', href: '/learn' },
    { name: 'Test', href: '/test' },
    { name: 'Check', href: '/check' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo - Smaller on mobile */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group active:scale-95 transition-transform duration-150">
              <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-primary-600 group-hover:text-primary-700 transition-colors duration-200" />
              <span className="text-lg sm:text-xl font-bold text-blue-900 group-hover:text-primary-600 transition-colors duration-200">
                InfoSphere
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on medium screens, visible on large */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50 border border-primary-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button - Hidden on medium screens, visible on large */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/learn"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button - Visible on medium and small screens */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-200 touch-manipulation active:scale-95 active:bg-gray-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40 animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl transform transition-all duration-300 ease-out z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="px-3 sm:px-4 pt-4 pb-6 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigation.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 touch-manipulation animate-in slide-in-from-right-2 duration-300 active:scale-95 active:bg-gray-100 ${
                      isActive
                        ? 'text-primary-600 bg-primary-50 border border-primary-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-100 animate-in slide-in-from-bottom-2 duration-300 delay-300">
                <Link
                  to="/learn"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-xl font-medium text-center transition-all duration-200 transform hover:scale-105 touch-manipulation active:scale-95 active:bg-primary-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
