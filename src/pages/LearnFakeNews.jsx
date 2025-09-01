import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowLeft, ArrowRight, AlertTriangle, Shield, Search, Clock, Star } from 'lucide-react';

const LearnFakeNews = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  const courseData = {
    id: 1,
    title: 'Spotting Fake News',
    description: 'Learn to identify and debunk fake news with proven techniques',
    duration: '15 min',
    difficulty: 'Beginner',
    lessons: [
      {
        id: 1,
        title: 'Understanding the Anatomy of Fake News',
        duration: '5 min',
        content: `
          <h3>What is Fake News?</h3>
          <p>Fake news refers to false or misleading information presented as legitimate news. It can be created for various reasons including financial gain, political influence, or simply to deceive readers.</p>
          
          <h3>Common Characteristics of Fake News:</h3>
          <ul>
            <li><strong>Sensational Headlines:</strong> Designed to grab attention and trigger emotional responses</li>
            <li><strong>Emotional Language:</strong> Uses words that evoke strong feelings like fear, anger, or excitement</li>
            <li><strong>Lack of Credible Sources:</strong> No verifiable sources or anonymous sources</li>
            <li><strong>Poor Grammar:</strong> Often contains spelling and grammatical errors</li>
            <li><strong>Unrealistic Claims:</strong> Promises that seem too good to be true</li>
          </ul>
          
          <h3>Why Fake News Spreads:</h3>
          <p>Fake news spreads quickly because it often confirms existing beliefs, triggers emotional responses, and is designed to be shareable on social media platforms.</p>
        `,
        resources: [
          { name: 'Fake News Checklist', type: 'PDF', url: '#' },
          { name: 'Red Flags Guide', type: 'Infographic', url: '#' }
        ]
      },
      {
        id: 2,
        title: 'Source Verification Techniques',
        duration: '5 min',
        content: `
          <h3>How to Verify News Sources:</h3>
          <p>Before believing any news story, it's crucial to verify the source and check multiple sources for confirmation.</p>
          
          <h3>Step-by-Step Verification Process:</h3>
          <ol>
            <li><strong>Check the URL:</strong> Look for suspicious domains or misspellings</li>
            <li><strong>Research the Source:</strong> Look up the website's about page and editorial policies</li>
            <li><strong>Check Author Credentials:</strong> Verify if the author is real and qualified</li>
            <li><strong>Cross-Reference:</strong> Check if other reputable sources report the same story</li>
            <li><strong>Use Fact-Checking Sites:</strong> Consult sites like Snopes, FactCheck.org, or PolitiFact</li>
          </ol>
          
          <h3>Red Flags to Watch For:</h3>
          <ul>
            <li>Websites with no clear ownership or contact information</li>
            <li>Sources that only publish one type of story</li>
            <li>Lack of corrections policy</li>
            <li>No author bylines or anonymous authors</li>
          </ul>
        `,
        resources: [
          { name: 'Source Verification Worksheet', type: 'PDF', url: '#' },
          { name: 'Trusted Sources List', type: 'Document', url: '#' }
        ]
      },
      {
        id: 3,
        title: 'Fact-Checking Tools and Resources',
        duration: '5 min',
        content: `
          <h3>Essential Fact-Checking Tools:</h3>
          <p>There are many reliable tools and resources available to help you verify information and spot fake news.</p>
          
          <h3>Recommended Fact-Checking Websites:</h3>
          <ul>
            <li><strong>Snopes:</strong> One of the oldest and most respected fact-checking sites</li>
            <li><strong>FactCheck.org:</strong> Nonpartisan fact-checking for political claims</li>
            <li><strong>PolitiFact:</strong> Pulitzer Prize-winning fact-checking organization</li>
            <li><strong>Reuters Fact Check:</strong> International news agency's fact-checking service</li>
            <li><strong>AP Fact Check:</strong> Associated Press fact-checking service</li>
          </ul>
          
          <h3>Browser Extensions and Tools:</h3>
          <ul>
            <li>NewsGuard: Browser extension that rates news site credibility</li>
            <li>B.S. Detector: Identifies unreliable news sources</li>
            <li>FactCheck.org Browser Extension: Quick access to fact checks</li>
          </ul>
          
          <h3>Image Verification Tools:</h3>
          <ul>
            <li>Google Reverse Image Search</li>
            <li>TinEye Reverse Image Search</li>
            <li>InVID Verification Plugin</li>
          </ul>
        `,
        resources: [
          { name: 'Fact-Checking Tools Guide', type: 'PDF', url: '#' },
          { name: 'Browser Extensions List', type: 'Document', url: '#' }
        ]
      }
    ]
  };

  const handleLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const progress = (completedLessons.length / courseData.lessons.length) * 100;
  const isCourseComplete = completedLessons.length === courseData.lessons.length;

  // Show completion screen if all lessons are done
  if (isCourseComplete) {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 via-transparent to-emerald-200/20"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back Button */}
              <Link 
                to="/learn"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8 font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Learning Center</span>
              </Link>
              
              <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 text-lg font-medium rounded-full mb-6">
                <CheckCircle className="h-6 w-6 mr-2" />
                Course Complete!
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Congratulations!
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  You've Completed the Course
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                You've successfully completed all lessons in "Spotting Fake News". 
                You now have the knowledge and skills to identify and debunk fake news effectively.
              </p>
              
              {/* Course Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{courseData.lessons.length}</div>
                  <div className="text-gray-600">Lessons Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{courseData.duration}</div>
                  <div className="text-gray-600">Total Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Would You Like to Do Next?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Continue your media literacy journey with these options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Take Quiz */}
              <div className="bg-white rounded-2xl border-2 border-primary-200 p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Test Your Knowledge</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Take a quiz to test what you've learned about spotting fake news
                  </p>
                  <Link
                    to="/test"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center space-x-2"
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <span>Take Quiz</span>
                  </Link>
                </div>
              </div>

              {/* Continue Learning */}
              <div className="bg-white rounded-2xl border-2 border-green-200 p-8 hover:border-green-300 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Continue Learning</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore more courses to expand your media literacy skills
                  </p>
                  <Link
                    to="/learn"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Browse Courses</span>
                  </Link>
                </div>
              </div>

              {/* Practice Fact-Checking */}
              <div className="bg-white rounded-2xl border-2 border-blue-200 p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Practice Fact-Checking</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Use our fact-checking tool to practice what you've learned
                  </p>
                  <Link
                    to="/check"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
                  >
                    <Search className="h-4 w-4" />
                    <span>Fact-Check Tool</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Reset Course Option */}
            <div className="text-center mt-12">
              <button
                onClick={() => setCompletedLessons([])}
                className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200"
              >
                Reset Course Progress
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 via-transparent to-blue-200/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/learn"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Learning Center</span>
            </Link>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
                <BookOpen className="h-4 w-4 mr-2" />
                Course
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {courseData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {courseData.description}
              </p>
              
              {/* Course Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{courseData.lessons.length}</div>
                  <div className="text-gray-600">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{courseData.duration}</div>
                  <div className="text-gray-600">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{courseData.difficulty}</div>
                  <div className="text-gray-600">Level</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
              <span className="text-lg text-gray-600">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              {completedLessons.length} of {courseData.lessons.length} lessons completed
            </div>
          </div>

          {/* Current Lesson */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Lesson {currentLesson + 1}: {courseData.lessons[currentLesson].title}
              </h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{courseData.lessons[currentLesson].duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="h-4 w-4" />
                  <span>Lesson {currentLesson + 1} of {courseData.lessons.length}</span>
                </div>
              </div>
            </div>

            {/* Lesson Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ __html: courseData.lessons[currentLesson].content }} />
            </div>

            {/* Lesson Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button
                onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                disabled={currentLesson === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  currentLesson === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>

              <div className="flex space-x-4">
                <button
                  onClick={() => handleLessonComplete(courseData.lessons[currentLesson].id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                    completedLessons.includes(courseData.lessons[currentLesson].id)
                      ? 'bg-green-100 text-green-700'
                      : 'bg-green-600 hover:bg-green-700 text-white hover:shadow-lg hover:shadow-green-500/25'
                  }`}
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>
                    {completedLessons.includes(courseData.lessons[currentLesson].id) ? 'Completed' : 'Mark Complete'}
                  </span>
                </button>
              </div>

              <button
                onClick={() => setCurrentLesson(Math.min(courseData.lessons.length - 1, currentLesson + 1))}
                disabled={currentLesson === courseData.lessons.length - 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  currentLesson === courseData.lessons.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Lesson Navigation */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Course Lessons</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseData.lessons.map((lesson, index) => (
                <div 
                  key={lesson.id}
                  className={`bg-white rounded-xl p-6 border-2 transition-all duration-200 cursor-pointer ${
                    currentLesson === index
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-200'
                  }`}
                  onClick={() => setCurrentLesson(index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                      <span className="text-primary-600 font-bold">{lesson.id}</span>
                    </div>
                    {completedLessons.includes(lesson.id) && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{lesson.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-3 w-3" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnFakeNews;
