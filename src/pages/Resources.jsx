import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, Download, Play, FileText, Globe, Shield, Search, Users, Award, Clock, Star } from 'lucide-react';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = {
    factChecking: [
      {
        name: 'Snopes',
        description: 'One of the oldest and most respected fact-checking websites',
        url: 'https://snopes.com',
        type: 'Website',
        rating: 5,
        category: 'Fact-Checking',
        features: ['Political claims', 'Urban legends', 'Viral stories', 'Historical myths']
      },
      {
        name: 'FactCheck.org',
        description: 'Nonpartisan fact-checking for political claims and statements',
        url: 'https://factcheck.org',
        type: 'Website',
        rating: 5,
        category: 'Fact-Checking',
        features: ['Political fact-checking', 'Policy analysis', 'Viral claims', 'Election coverage']
      },
      {
        name: 'PolitiFact',
        description: 'Pulitzer Prize-winning fact-checking organization',
        url: 'https://politifact.com',
        type: 'Website',
        rating: 5,
        category: 'Fact-Checking',
        features: ['Truth-O-Meter', 'PolitiFact PunditFact', 'State fact-checking', 'Rulings database']
      },
      {
        name: 'Reuters Fact Check',
        description: 'International news agency fact-checking service',
        url: 'https://reuters.com/fact-check',
        type: 'Website',
        rating: 5,
        category: 'Fact-Checking',
        features: ['Global coverage', 'Breaking news fact-checks', 'Multilingual content', 'Expert analysis']
      }
    ],
    tools: [
      {
        name: 'Google Reverse Image Search',
        description: 'Find where images originally appeared online',
        url: 'https://images.google.com',
        type: 'Tool',
        rating: 5,
        category: 'Image Verification',
        features: ['Image search', 'Similar images', 'Source tracking', 'Free to use']
      },
      {
        name: 'TinEye Reverse Image Search',
        description: 'Specialized reverse image search engine',
        url: 'https://tineye.com',
        type: 'Tool',
        rating: 4,
        category: 'Image Verification',
        features: ['Advanced search', 'Browser extension', 'API access', 'Detailed results']
      },
      {
        name: 'NewsGuard',
        description: 'Browser extension that rates news site credibility',
        url: 'https://newsguardtech.com',
        type: 'Browser Extension',
        rating: 4,
        category: 'Source Rating',
        features: ['Site ratings', 'Trust indicators', 'Browser integration', 'Transparent criteria']
      },
      {
        name: 'B.S. Detector',
        description: 'Browser extension that identifies unreliable news sources',
        url: 'https://github.com/selfagency/bs-detector',
        type: 'Browser Extension',
        rating: 4,
        category: 'Source Rating',
        features: ['Source detection', 'Warning system', 'Open source', 'Community-driven']
      }
    ],
    guides: [
      {
        name: 'Media Literacy Guide',
        description: 'Comprehensive guide to developing media literacy skills',
        type: 'PDF Guide',
        rating: 5,
        category: 'Educational',
        features: ['Skill development', 'Practice exercises', 'Real examples', 'Assessment tools'],
        downloadUrl: '#'
      },
      {
        name: 'Fact-Checking Checklist',
        description: 'Step-by-step process for verifying information',
        type: 'PDF Guide',
        rating: 5,
        category: 'Educational',
        features: ['Verification steps', 'Red flag indicators', 'Source evaluation', 'Quick reference'],
        downloadUrl: '#'
      },
      {
        name: 'Deepfake Detection Guide',
        description: 'How to identify AI-generated content and deepfakes',
        type: 'PDF Guide',
        rating: 4,
        category: 'Educational',
        features: ['Visual indicators', 'Audio detection', 'Technical tools', 'Case studies'],
        downloadUrl: '#'
      },
      {
        name: 'Source Credibility Worksheet',
        description: 'Interactive worksheet for evaluating news sources',
        type: 'PDF Guide',
        rating: 4,
        category: 'Educational',
        features: ['Evaluation criteria', 'Scoring system', 'Examples', 'Practice scenarios'],
        downloadUrl: '#'
      }
    ],
    organizations: [
      {
        name: 'International Fact-Checking Network',
        description: 'Global network of fact-checking organizations',
        url: 'https://ifcn.org',
        type: 'Organization',
        rating: 5,
        category: 'Professional',
        features: ['Code of principles', 'Fact-checking database', 'Training resources', 'Global network']
      },
      {
        name: 'Poynter Institute',
        description: 'Leading journalism education and fact-checking organization',
        url: 'https://poynter.org',
        type: 'Organization',
        rating: 5,
        category: 'Professional',
        features: ['Journalism training', 'Fact-checking resources', 'Media literacy', 'Research']
      },
      {
        name: 'First Draft News',
        description: 'Organization focused on addressing mis- and disinformation',
        url: 'https://firstdraftnews.org',
        type: 'Organization',
        rating: 4,
        category: 'Professional',
        features: ['Misinformation research', 'Training programs', 'Verification tools', 'Global reach']
      },
      {
        name: 'News Literacy Project',
        description: 'Nonprofit providing tools and resources for news literacy',
        url: 'https://newslit.org',
        type: 'Organization',
        rating: 4,
        category: 'Professional',
        features: ['Educational resources', 'Student programs', 'Teacher training', 'Assessment tools']
      }
    ]
  };

  const allResources = [
    ...resources.factChecking,
    ...resources.tools,
    ...resources.guides,
    ...resources.organizations
  ];

  const filteredResources = selectedCategory === 'all' 
    ? allResources 
    : allResources.filter(resource => resource.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Resources', count: allResources.length },
    { id: 'Fact-Checking', name: 'Fact-Checking Sites', count: resources.factChecking.length },
    { id: 'Image Verification', name: 'Image Verification Tools', count: resources.tools.filter(r => r.category === 'Image Verification').length },
    { id: 'Source Rating', name: 'Source Rating Tools', count: resources.tools.filter(r => r.category === 'Source Rating').length },
    { id: 'Educational', name: 'Educational Guides', count: resources.guides.length },
    { id: 'Professional', name: 'Professional Organizations', count: resources.organizations.length }
  ];

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 via-transparent to-blue-200/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Resource Library
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Helpful Resources
              <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                For Media Literacy
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access trusted fact-checking websites, verification tools, educational guides, and professional 
              organizations to enhance your media literacy skills and fact-checking abilities.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">{allResources.length}</div>
                <div className="text-gray-600">Total Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">6</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5.0</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                    selectedCategory === category.id
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-bold text-lg">{category.count}</div>
                  <div className="text-sm">{category.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                {/* Resource Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{resource.description}</p>
                  </div>
                  <div className="flex items-center space-x-1 ml-4">
                    {getRatingStars(resource.rating)}
                  </div>
                </div>

                {/* Resource Type Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                  {resource.type === 'Website' && <Globe className="h-3 w-3 mr-2" />}
                  {resource.type === 'Tool' && <Search className="h-3 w-3 mr-2" />}
                  {resource.type === 'Browser Extension' && <Shield className="h-3 w-3 mr-2" />}
                  {resource.type === 'PDF Guide' && <FileText className="h-3 w-3 mr-2" />}
                  {resource.type === 'Organization' && <Users className="h-3 w-3 mr-2" />}
                  {resource.type}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {resource.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                    {resource.features.length > 3 && (
                      <li className="text-sm text-primary-600 font-medium">
                        +{resource.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {resource.url ? (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Visit Site</span>
                    </a>
                  ) : (
                    <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  )}
                  
                  {resource.downloadUrl && (
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>PDF</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-20 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">More Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Take Our Courses</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Enhance your media literacy skills with our structured learning courses designed by experts.
                </p>
                <Link 
                  to="/learn"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  Start Learning
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Join the Community</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Connect with other learners, share insights, and discuss media literacy challenges.
                </p>
                <Link 
                  to="/community"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  Join Discussion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

