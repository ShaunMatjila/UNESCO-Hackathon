import { useState } from 'react';
import { BookOpen, Play, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

const Learn = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Spotting Fake News',
      description: 'Learn to identify and debunk fake news with proven techniques',
      lessons: 3,
      duration: '15 min',
      color: 'primary',
      lessons: [
        {
          id: 1,
          title: 'Understanding the Anatomy of Fake News',
          content: 'Learn about the common characteristics and patterns of fake news articles, including sensational headlines, emotional manipulation, and lack of credible sources.',
          videoUrl: '#',
          learnMoreUrl: '#',
          completed: false
        },
        {
          id: 2,
          title: 'Source Verification Techniques',
          content: 'Master the art of verifying news sources, checking author credentials, and evaluating website credibility to distinguish reliable information from misinformation.',
          videoUrl: '#',
          learnMoreUrl: '#',
          completed: false
        },
        {
          id: 3,
          title: 'Fact-Checking Tools and Resources',
          content: 'Discover essential fact-checking tools, databases, and resources that professional journalists use to verify information quickly and accurately.',
          videoUrl: '#',
          learnMoreUrl: '#',
          completed: false
        }
      ]
    },
    {
      id: 2,
      title: 'AI Deepfakes 101',
      description: 'Navigate the world of AI-generated content and deepfake technology',
      lessons: 3,
      duration: '20 min',
      color: 'green',
      lessons: [
        {
          id: 1,
          title: 'What Are Deepfakes?',
          content: 'Understand the technology behind deepfakes, how they work, and why they pose such a significant threat to information integrity in the digital age.',
          videoUrl: '#',
          learnMoreUrl: '#',
          completed: false
        },
        {
          id: 2,
          title: 'Detecting AI-Generated Content',
          content: 'Learn practical techniques to identify AI-generated images, videos, and text, including visual artifacts, inconsistencies, and technological limitations.',
          videoUrl: '#',
          learnMoreUrl: '#',
          completed: false
        },
        {
          id: 3,
          title: 'The Future of Synthetic Media',
          content: 'Explore emerging trends in AI-generated content, potential countermeasures, and how to stay ahead of evolving deepfake technology.',
          videoUrl: '#',
          learnMoreUrl: '#',
          completed: false
        }
      ]
    },
    {
      id: 3,
      title: 'How to Fact-Check',
      description: 'Master professional fact-checking methodologies and best practices',
      lessons: 3,
      duration: '25 min',
      color: 'purple',
      lessons: [
        {
          id: 1,
          title: 'The Fact-Checking Process',
          content: 'Learn the systematic approach to fact-checking, including claim identification, source evaluation, and evidence verification techniques.',
          videoUrl: '#',
          learnMoreUrl: '#',
          completed: false
        },
        {
          id: 2,
          title: 'Evaluating Sources and Evidence',
          content: 'Develop skills to assess source credibility, identify bias, and evaluate the quality and relevance of evidence presented in claims.',
          videoUrl: '#',
          learnMoreUrl: '#',
          completed: false
        },
        {
          id: 3,
          title: 'Presenting Fact-Check Results',
          content: 'Learn how to communicate fact-check findings effectively, present evidence clearly, and help others understand the verification process.',
          videoUrl: '#',
          learnMoreUrl: '#',
          completed: false
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-100 text-primary-600 hover:bg-primary-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200'
    };
    return colors[color] || colors.primary;
  };

  const handleLessonComplete = (courseId, lessonId) => {
    setSelectedCourse(courses.find(c => c.id === courseId));
    setSelectedLesson(selectedCourse.lessons.find(l => l.id === lessonId));
    // In a real app, this would update the database
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Learning Center</h1>
          </div>
          <p className="text-lg text-gray-600">
            Master media and information literacy through structured micro-courses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <div key={course.id} className="card group cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(course.color)}`}>
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">{course.duration}</span>
                  <div className="text-sm text-gray-500">{course.lessons.length} lessons</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {course.description}
              </p>
              
              <button
                onClick={() => setSelectedCourse(course)}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <span>Start Course</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Course Detail Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(selectedCourse.color)}`}>
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
                      <p className="text-gray-600">{selectedCourse.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {selectedCourse.lessons.map((lesson) => (
                    <div key={lesson.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Lesson {lesson.id}: {lesson.title}
                        </h3>
                        {lesson.completed && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{lesson.content}</p>
                      
                      <div className="flex items-center space-x-3">
                        <button className="btn-primary flex items-center space-x-2">
                          <Play className="h-4 w-4" />
                          <span>Watch Video</span>
                        </button>
                        <a href={lesson.learnMoreUrl} className="btn-secondary flex items-center space-x-2">
                          <ExternalLink className="h-4 w-4" />
                          <span>Learn More</span>
                        </a>
                        <button 
                          onClick={() => handleLessonComplete(selectedCourse.id, lesson.id)}
                          className="btn-secondary"
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
    </div>
  );
};

export default Learn;
