import { Info, Target, Users, Globe, Award, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 via-transparent to-blue-200/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
              <Info className="h-4 w-4 mr-2" />
              About Us
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Digital Citizens
              <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Through Media Literacy
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize media and information literacy by providing accessible, 
              engaging, and evidence-based educational resources that empower individuals to critically 
              evaluate information and make informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-6">
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building a More Informed World
            </h2>
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
              <Globe className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                To democratize media and information literacy by providing accessible, engaging, 
                and evidence-based educational resources that empower individuals to critically 
                evaluate information, recognize bias, and make informed decisions in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Exist Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full mb-6">
              Why We Exist
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Addressing the Information Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's digital landscape, misinformation spreads faster than ever before. 
              We provide the tools and knowledge needed to navigate this complex information environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The Information Crisis</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Social media algorithms, AI-generated content, and sophisticated disinformation 
                campaigns make it increasingly difficult to distinguish fact from fiction.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The Trust Gap</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Public trust in traditional media has declined, while new sources of information 
                emerge daily, creating a dangerous environment for civic discourse.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Solution</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                A comprehensive platform that combines education, practice, and community 
                to build media literacy skills for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-6">
              Our Approach
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Three Pillars of Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures that learners develop both theoretical knowledge 
              and practical skills through structured progression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-600 font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn</h3>
              <p className="text-gray-600 leading-relaxed">
                Structured micro-courses designed by media literacy experts, covering everything 
                from basic fact-checking to advanced AI detection techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Practice</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive quizzes and real-world fact-checking tools that help users apply 
                their knowledge and develop critical thinking skills.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                A supportive community where learners can discuss, share experiences, and 
                help each other navigate the complex information landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full mb-6">
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Principles That Guide Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values shape everything we do, from content creation to community building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Evidence-Based</h3>
              <p className="text-gray-600 leading-relaxed">
                All our content is grounded in research and best practices from media literacy 
                experts, fact-checking organizations, and educational institutions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessible</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe media literacy education should be available to everyone, regardless 
                of background, education level, or technical expertise.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Non-Partisan</h3>
              <p className="text-gray-600 leading-relaxed">
                Our focus is on teaching critical thinking skills, not promoting any particular 
                viewpoint or political perspective.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                We value the insights and experiences of our community members and believe 
                that learning happens best through collaboration and discussion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-6">
              Partners & Collaborators
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Working with Leading Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with academic institutions and fact-checking organizations 
              to ensure the highest quality of our educational content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Partners</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Media Literacy Research Consortium
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Digital Citizenship Institute
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Journalism Education Association
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Information Literacy Coalition
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fact-Checking Partners</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  International Fact-Checking Network
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Poynter Institute
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  First Draft News
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  News Literacy Project
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full mb-6">
            Our Impact
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Making a Difference Worldwide
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform has reached learners across the globe, building a more informed 
            and critical-thinking digital citizenry.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <p className="text-gray-600 text-lg">Active Learners</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600 text-lg">Countries Reached</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <p className="text-gray-600 text-lg">User Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
