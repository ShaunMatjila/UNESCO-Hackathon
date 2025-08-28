import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, TestTube, Search, Shield, Users, Target, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Take a Journey into the{' '}
              <span className="text-primary-600">New Information World</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              In the age of AI and digital transformation, misinformation spreads faster than ever. 
              InfoSphere empowers you with the critical thinking skills and tools needed to navigate 
              the complex information landscape with confidence.
            </p>
            <Link to="/learn" className="btn-primary inline-flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-400 transform rotate-12 scale-150"></div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About InfoSphere
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that media and information literacy is not just a skill—it's a fundamental 
              right in today's digital society. Our platform provides comprehensive tools and resources 
              to help you become a discerning consumer and creator of information.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Platform Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why This Platform Matters
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">The Misinformation Crisis</h3>
                    <p className="text-gray-600">
                      False information spreads 6 times faster than the truth on social media, 
                      creating a dangerous environment for decision-making and public discourse.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Deepfakes & Trust Gap</h3>
                    <p className="text-gray-600">
                      Advanced AI technology makes it increasingly difficult to distinguish between 
                      real and fabricated content, eroding trust in media and institutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Interactive Solution</h3>
                    <p className="text-gray-600">
                      InfoSphere provides an interactive hub where you can learn, practice, and 
                      develop the critical thinking skills needed to navigate the information age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gray-100 rounded-lg"></div>
                    <div className="h-20 bg-gray-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Globe className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
          </div>
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              To democratize media and information literacy by providing accessible, engaging, 
              and evidence-based educational resources that empower individuals to critically 
              evaluate information, recognize bias, and make informed decisions in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Banner Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-gray-600">
              Partnering with global institutions committed to media literacy and fact-checking
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['UNESCO', 'FactCheck.org', 'Snopes', 'Poynter Institute'].map((partner) => (
              <div key={partner} className="flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 w-full max-w-48 h-20 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold text-lg">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Overview Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your path to becoming a media literacy expert
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Learn Card */}
            <div className="card text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-200">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learn</h3>
              <p className="text-gray-600 mb-6">
                Access structured micro-courses on spotting fake news, understanding AI deepfakes, 
                and mastering fact-checking techniques.
              </p>
              <Link to="/learn" className="btn-primary w-full">
                Start Learning
              </Link>
            </div>

            {/* Test Card */}
            <div className="card text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-200">
                <TestTube className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Test</h3>
              <p className="text-gray-600 mb-6">
                Challenge yourself with interactive quizzes at beginner, intermediate, and advanced 
                levels. Track your progress and earn badges.
              </p>
              <Link to="/test" className="btn-primary w-full">
                Take Quiz
              </Link>
            </div>

            {/* Check Card */}
            <div className="card text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Check</h3>
              <p className="text-gray-600 mb-6">
                Use our fact-checking tool to verify headlines, URLs, and content. Get instant 
                credibility assessments and detailed explanations.
              </p>
              <Link to="/check" className="btn-primary w-full">
                Fact Check
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
