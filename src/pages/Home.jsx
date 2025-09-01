import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, TestTube, Search, Shield, Users, Target, Globe, Sparkles, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Primary Background Image - People Interacting */}
        {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-50"></div> */}
        
        {/* Simple Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-blue-400/20 transform rotate-12 scale-150"></div>
        </div>
        
        {/* Gradient Overlay - Much Lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-800/30 to-slate-900/40"></div>
        
        {/* Additional Background Image Layer */}
        {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay"></div> */}
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
          
          {/* Floating Abstract Shapes */}
          <div className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-primary-400/30 to-blue-400/30 rounded-full opacity-20 blur-sm"></div>
          <div className="absolute bottom-32 left-32 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full opacity-15 blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium text-white/90">Empowering Digital Literacy</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Take a Journey into the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
              New Information World
            </span>
            </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              In the age of AI and digital transformation, misinformation spreads faster than ever. 
              InfoSphere empowers you with the critical thinking skills and tools needed to navigate 
              the complex information landscape with confidence.
            </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/learn" className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 text-white font-semibold rounded-xl shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105">
              <span className="mr-2">Start Your Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm">Free & Accessible</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm">Evidence-Based</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm">UNESCO Partner</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
        </div> */}
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>About InfoSphere</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Digital Literacy for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                Everyone
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe that media and information literacy is not just a skill—it's a fundamental 
              right in today's digital society. Our platform provides comprehensive tools and resources 
              to help you become a discerning consumer and creator of information.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-primary-600 mb-2">6x</div>
              <div className="text-gray-600 font-medium">Faster spread of misinformation vs truth</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.5B+</div>
              <div className="text-gray-600 font-medium">People affected by fake news daily</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success rate in fact-checking accuracy</div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust & Reliability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Evidence-based content verified by experts and fact-checking organizations
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collaborative learning environment with peer support and shared knowledge
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Skills</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hands-on tools and real-world applications for immediate use
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Accessible worldwide with multilingual support and cultural relevance
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Why This Platform Section */}
      <section className="section-padding bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>The Challenge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why This Platform{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Matters
              </span>
              </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In today's digital landscape, misinformation and AI-generated content pose unprecedented 
              challenges to truth and trust. Our platform addresses these critical issues head-on.
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-red-600" />
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The Misinformation Crisis</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                      False information spreads 6 times faster than the truth on social media, 
                      creating a dangerous environment for decision-making and public discourse.
                    </p>
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">6x</div>
                <div className="text-sm text-gray-500">Faster spread rate</div>
                  </div>
                </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-orange-600" />
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI Deepfakes & Trust Gap</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                      Advanced AI technology makes it increasingly difficult to distinguish between 
                      real and fabricated content, eroding trust in media and institutions.
                    </p>
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                <div className="text-sm text-gray-500">Can't spot deepfakes</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-purple-600" />
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Digital Literacy Gap</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Only 14% of people can identify fake news, leaving the majority vulnerable 
                to manipulation and poor decision-making.
              </p>
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">14%</div>
                <div className="text-sm text-gray-500">Can identify fake news</div>
              </div>
            </div>
          </div>




        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                Truth-Aware World
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize media and information literacy, making critical thinking 
              skills accessible to everyone in the digital age.
            </p>
          </div>

          {/* Mission Statement Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 mb-20">
            <div className="max-w-5xl mx-auto text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Globe className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Core Mission
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
              To democratize media and information literacy by providing accessible, engaging, 
              and evidence-based educational resources that empower individuals to critically 
              evaluate information, recognize bias, and make informed decisions in the digital age.
            </p>

            </div>
          </div>

          {/* Vision & Goals Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A world where every individual has the skills and confidence to navigate the complex 
                information landscape, making informed decisions that benefit themselves and society.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Universal access to media literacy education</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Critical thinking as a fundamental life skill</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Trustworthy information ecosystem</span>
                </li>
              </ul>
            </div>

            {/* Goals */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Goals</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're working towards measurable outcomes that will transform how people interact 
                with information in the digital age.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>1M+ users equipped with fact-checking skills</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>50+ countries with localized content</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>90% improvement in media literacy scores</span>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </section>

      {/* Partners Banner Section */}
      <section className="section-padding bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Shared Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Organizations with the Same{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Mission
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              These organizations share our commitment to media literacy, fact-checking, and 
              digital education. While we're not partnered, we're inspired by their work and 
              share the same goals for a more informed world.
            </p>
          </div>

          {/* Organizations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* UNESCO */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">UN</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">UNESCO</h3>
              <p className="text-sm text-gray-600 mb-4">
                United Nations Educational, Scientific and Cultural Organization
              </p>
              <div className="text-xs text-blue-600 font-medium">Global Authority</div>
            </div>

            {/* FactCheck.org */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">FC</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FactCheck.org</h3>
              <p className="text-sm text-gray-600 mb-4">
                Nonpartisan fact-checking website for American politics
              </p>
              <div className="text-xs text-green-600 font-medium">Fact-Checking Leader</div>
            </div>

            {/* Snopes */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">S</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Snopes</h3>
              <p className="text-sm text-gray-600 mb-4">
                Internet reference source for urban legends and misinformation
              </p>
              <div className="text-xs text-purple-600 font-medium">Research Pioneer</div>
            </div>

            {/* Poynter Institute */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">P</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Poynter Institute</h3>
              <p className="text-sm text-gray-600 mb-4">
                Nonprofit journalism school and research organization
              </p>
              <div className="text-xs text-orange-600 font-medium">Media Education Leader</div>
            </div>
          </div>

          {/* Mission Alignment */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 mb-20">
            <div className="max-w-5xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why This Matters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Shared Values</h4>
                    <p className="text-gray-700 text-sm">
                      We believe in the same principles as these respected organizations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common Goals</h4>
                    <p className="text-gray-700 text-sm">
                      Working toward the same mission of improving media literacy worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry Recognition</h4>
                    <p className="text-gray-700 text-sm">
                      Being mentioned alongside these organizations validates our approach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Journey Overview Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Learning{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose your path to becoming a media literacy expert. Each journey is designed to 
              build your skills progressively, from foundational knowledge to advanced application.
            </p>
          </div>
          
          {/* Journey Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Learn Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Learn</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Access structured micro-courses on spotting fake news, understanding AI deepfakes, 
                and mastering fact-checking techniques.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Micro-courses & modules</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Interactive content</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Progress tracking</span>
                </div>
              </div>
              <Link to="/learn" className="btn-primary w-full">
                Start Learning
              </Link>
            </div>

            {/* Test Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TestTube className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Test</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Challenge yourself with interactive quizzes at beginner, intermediate, and advanced 
                levels. Track your progress and earn badges.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>3 difficulty levels</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Progress tracking</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Badge system</span>
                </div>
              </div>
              <Link to="/test" className="btn-primary w-full">
                Take Quiz
              </Link>
            </div>

            {/* Check Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Check</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Use our fact-checking tool to verify headlines, URLs, and content. Get instant 
                credibility assessments and detailed explanations.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Instant verification</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Credibility scores</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Detailed analysis</span>
                </div>
              </div>
              <Link to="/check" className="btn-primary w-full">
                Fact Check
              </Link>
            </div>
          </div>

          {/* Journey Progress Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Progress Path</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow this structured approach to build your media literacy skills systematically
              </p>
            </div>
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <span className="text-sm font-medium text-gray-700">Learn</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <span className="text-sm font-medium text-gray-700">Test</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <span className="text-sm font-medium text-gray-700">Check</span>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
};

export default Home;
