import { Link } from 'react-router-dom';
import { Shield, Twitter, Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* <div className="p-3 bg-primary-600 rounded-2xl">
                <Shield className="h-8 w-8 text-white" />
              </div> */}
              <span className="text-2xl font-bold">InfoSphere</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">
              Empowering individuals with media and information literacy skills to navigate the digital age with confidence and critical thinking.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-200 group">
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-200 group">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-200 group">
                <Github className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-200 group">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            </div> */}
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Platform</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/learn" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/test" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Test
                </Link>
              </li>
              <li>
                <Link to="/check" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Fact Check
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Leaderboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="bg-gradient-to-r from-primary-600/20 to-blue-600/20 rounded-2xl p-8 mb-12 border border-primary-500/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on media literacy, fact-checking tools, and educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 InfoSphere. All rights reserved.
            </p>
            {/* <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for people by people</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
