import { useState } from 'react';
import { BookOpen, CheckCircle, ExternalLink, ArrowRight, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Learn = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Spotting Fake News',
      description: 'Learn to identify and debunk fake news with proven techniques',
      lessonCount: 3,
      duration: '15 min',
      color: 'primary',
      lessons: [
        {
          id: 1,
          title: 'Understanding the Anatomy of Fake News',
          content: 'Learn about the common characteristics and patterns of fake news articles, including sensational headlines, emotional manipulation, and lack of credible sources.',
          learnMoreUrl: '/learn/1',
          completed: false
        },
        {
          id: 2,
          title: 'Source Verification Techniques',
          content: 'Master the art of verifying news sources, checking author credentials, and evaluating website credibility to distinguish reliable information from misinformation.',
          learnMoreUrl: '/learn/1',
          completed: false
        },
        {
          id: 3,
          title: 'Fact-Checking Tools and Resources',
          content: 'Discover essential fact-checking tools, databases, and resources that professional journalists use to verify information quickly and accurately.',
          learnMoreUrl: '/learn/1',
          completed: false
        }
      ]
    },
    {
      id: 2,
      title: 'AI Deepfakes 101',
      description: 'Navigate the world of AI-generated content and deepfake technology',
      lessonCount: 3,
      duration: '20 min',
      color: 'green',
      lessons: [
        {
          id: 1,
          title: 'What Are Deepfakes?',
          content: 'Understand the technology behind deepfakes, how they work, and why they pose such a significant threat to information integrity in the digital age.',
          learnMoreUrl: '/learn/2',
          completed: false
        },
        {
          id: 2,
          title: 'Detecting AI-Generated Content',
          content: 'Learn practical techniques to identify AI-generated images, videos, and text, including visual artifacts, inconsistencies, and technological limitations.',
          learnMoreUrl: '/learn/2',
          completed: false
        },
        {
          id: 3,
          title: 'The Future of Synthetic Media',
          content: 'Explore emerging trends in AI-generated content, potential countermeasures, and how to stay ahead of evolving deepfake technology.',
          learnMoreUrl: '/learn/2',
          completed: false
        }
      ]
    },
    {
      id: 3,
      title: 'How to Fact-Check',
      description: 'Master professional fact-checking methodologies and best practices',
      lessonCount: 3,
      duration: '25 min',
      color: 'purple',
      lessons: [
        {
          id: 1,
          title: 'The Fact-Checking Process',
          content: 'Learn the systematic approach to fact-checking, including claim identification, source evaluation, and evidence verification techniques.',
          learnMoreUrl: '/check',
          completed: false
        },
        {
          id: 2,
          title: 'Evaluating Sources and Evidence',
          content: 'Develop skills to assess source credibility, identify bias, and evaluate the quality and relevance of evidence presented in claims.',
          learnMoreUrl: '/check',
          completed: false
        },
        {
          id: 3,
          title: 'Presenting Fact-Check Results',
          content: 'Learn how to communicate fact-check findings effectively, present evidence clearly, and help others understand the verification process.',
          learnMoreUrl: '/check',
          completed: false
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-100 text-primary-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color] || colors.primary;
  };

  const handleLessonComplete = (courseId, lessonId) => {
    setSelectedCourse(courses.find(c => c.id === courseId));
    setSelectedLesson(selectedCourse.lessons.find(l => l.id === lessonId));
    // In a real app, this would update the database
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
              Learning Center
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Media Literacy
              <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Through Structured Learning
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build critical thinking skills with our expert-designed micro-courses. Learn to spot fake news, 
              detect AI deepfakes, and master professional fact-checking techniques.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">3</div>
                <div className="text-gray-600">Core Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">9</div>
                <div className="text-gray-600">Total Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">60</div>
                <div className="text-gray-600">Minutes Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-6">
              Available Courses
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each course is designed to build specific skills through practical lessons and real-world applications.
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="group cursor-pointer">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${getColorClasses(course.color)}`}>
                      <BookOpen className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 font-medium">{course.duration}</span>
                      <div className="text-sm text-gray-500">{course.lessonCount} lessons</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  

                  
                  {/* Quick Access Links */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <Link
                        to={`/learn/${course.id}`}
                        className="flex-1 text-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        View Details
                      </Link>
                      <span className="text-gray-300">|</span>
                      <Link
                        to={`/learn/${course.id}/lessons`}
                        className="flex-1 text-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        All Lessons
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-6">
              Additional Resources
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore More Learning Materials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access helpful tools, guides, and external resources to enhance your learning experience.
            </p>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Question of the Day</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Test your knowledge with our daily rotating question and join the community discussion.
              </p>
              <Link 
                to="/community" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25"
              >
                Try Today's Question
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Additional Resources</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access helpful tools, guides, and external resources to enhance your learning experience.
              </p>
              <Link 
                to="/resources" 
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${getColorClasses(selectedCourse.color)}`}>
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedCourse.title}</h2>
                    <p className="text-gray-600 text-lg">{selectedCourse.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                {selectedCourse.lessons.map((lesson) => (
                  <div key={lesson.id} className="border border-gray-200 rounded-xl p-6 hover:border-primary-200 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Lesson {lesson.id}: {lesson.title}
                      </h3>
                      {lesson.completed && (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{lesson.content}</p>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <a href={lesson.learnMoreUrl} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4" />
                        <span>Learn More</span>
                      </a>
                      <button 
                        onClick={() => handleLessonComplete(selectedCourse.id, lesson.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
                      >
                        Take Quiz
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;
