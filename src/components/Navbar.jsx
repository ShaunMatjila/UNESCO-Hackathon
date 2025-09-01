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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <Shield className="h-8 w-8 text-primary-600" /> */}
              <span className="text-xl font-bold text-blue-900">InfoSphere</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/learn"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-200"
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50 border border-primary-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                to="/learn"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium text-center transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
