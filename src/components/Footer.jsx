import { Link } from 'react-router-dom';
import { Shield, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">InfoSphere</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Empowering individuals with media and information literacy skills to navigate the digital age with confidence and critical thinking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/learn" className="text-gray-600 hover:text-gray-900">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/test" className="text-gray-600 hover:text-gray-900">
                  Test
                </Link>
              </li>
              <li>
                <Link to="/check" className="text-gray-600 hover:text-gray-900">
                  Fact Check
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-gray-900">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-gray-600 hover:text-gray-900">
                  Leaderboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 InfoSphere. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Built for people by people
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
