import { Info, Target, Users, Globe, Award, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Info className="h-8 w-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">About InfoSphere</h1>
          </div>
          <p className="text-lg text-gray-600">
            Learn more about our mission to democratize media and information literacy
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mission Statement */}
        <div className="card mb-8">
          <div className="text-center mb-8">
            <Globe className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To democratize media and information literacy by providing accessible, engaging, 
              and evidence-based educational resources that empower individuals to critically 
              evaluate information, recognize bias, and make informed decisions in the digital age.
            </p>
          </div>
        </div>

        {/* Why We Exist */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why InfoSphere Exists</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">The Information Crisis</h3>
                <p className="text-gray-600">
                  In today's digital landscape, misinformation spreads faster than ever before. 
                  Social media algorithms, AI-generated content, and sophisticated disinformation 
                  campaigns make it increasingly difficult to distinguish fact from fiction.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">The Trust Gap</h3>
                <p className="text-gray-600">
                  Public trust in traditional media has declined, while new sources of information 
                  emerge daily. This creates a dangerous environment where people may turn to 
                  unreliable sources or become completely disengaged from civic discourse.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h3>
                <p className="text-gray-600">
                  InfoSphere provides a comprehensive platform that combines education, practice, 
                  and community to build media literacy skills. We believe that everyone deserves 
                  the tools to navigate the information landscape with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn</h3>
              <p className="text-gray-600">
                Structured micro-courses designed by media literacy experts, covering everything 
                from basic fact-checking to advanced AI detection techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice</h3>
              <p className="text-gray-600">
                Interactive quizzes and real-world fact-checking tools that help users apply 
                their knowledge and develop critical thinking skills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect</h3>
              <p className="text-gray-600">
                A supportive community where learners can discuss, share experiences, and 
                help each other navigate the complex information landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence-Based</h3>
                <p className="text-gray-600">
                  All our content is grounded in research and best practices from media literacy 
                  experts, fact-checking organizations, and educational institutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessible</h3>
                <p className="text-gray-600">
                  We believe media literacy education should be available to everyone, regardless 
                  of background, education level, or technical expertise.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Non-Partisan</h3>
                <p className="text-gray-600">
                  Our focus is on teaching critical thinking skills, not promoting any particular 
                  viewpoint or political perspective.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community-Driven</h3>
                <p className="text-gray-600">
                  We value the insights and experiences of our community members and believe 
                  that learning happens best through collaboration and discussion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team/Partners */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Partners & Collaborators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Partners</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Media Literacy Research Consortium</li>
                <li>• Digital Citizenship Institute</li>
                <li>• Journalism Education Association</li>
                <li>• Information Literacy Coalition</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fact-Checking Partners</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• International Fact-Checking Network</li>
                <li>• Poynter Institute</li>
                <li>• First Draft News</li>
                <li>• News Literacy Project</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
              <p className="text-gray-600">Active Learners</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">Countries Reached</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
              <p className="text-gray-600">User Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
