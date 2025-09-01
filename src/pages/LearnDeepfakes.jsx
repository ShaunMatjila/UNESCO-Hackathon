import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowLeft, ArrowRight, AlertTriangle, Shield, Search, Clock, Star, Eye, Brain } from 'lucide-react';

const LearnDeepfakes = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  const courseData = {
    id: 2,
    title: 'AI Deepfakes 101',
    description: 'Navigate the world of AI-generated content and deepfake technology',
    duration: '20 min',
    difficulty: 'Intermediate',
    lessons: [
      {
        id: 1,
        title: 'What Are Deepfakes?',
        duration: '7 min',
        content: `
          <h3>Understanding Deepfake Technology:</h3>
          <p>Deepfakes are AI-generated media (images, videos, audio) that appear real but are actually synthetic. The term combines "deep learning" and "fake," referring to the use of artificial intelligence to create convincing forgeries.</p>
          
          <h3>How Deepfakes Work:</h3>
          <ul>
            <li><strong>Generative Adversarial Networks (GANs):</strong> Two AI systems compete - one creates fake content, the other tries to detect it</li>
            <li><strong>Autoencoders:</strong> AI systems that learn to compress and reconstruct media files</li>
            <li><strong>Neural Networks:</strong> Complex algorithms that mimic human brain function</li>
            <li><strong>Training Data:</strong> Large datasets of real media used to teach the AI</li>
          </ul>
          
          <h3>Types of Deepfakes:</h3>
          <ul>
            <li><strong>Face Swapping:</strong> Replacing one person's face with another's</li>
            <li><strong>Voice Cloning:</strong> Mimicking someone's voice patterns</li>
            <li><strong>Text Generation:</strong> Creating human-like written content</li>
            <li><strong>Image Generation:</strong> Creating entirely new images from descriptions</li>
          </ul>
          
          <h3>Why Deepfakes Are Concerning:</h3>
          <p>Deepfakes can be used for misinformation, fraud, identity theft, and manipulation of public opinion. They pose a significant threat to trust in media and can have serious real-world consequences.</p>
        `,
        resources: [
          { name: 'Deepfake Technology Guide', type: 'PDF', url: '#' },
          { name: 'AI Media Types Chart', type: 'Infographic', url: '#' }
        ]
      },
      {
        id: 2,
        title: 'Detecting AI-Generated Content',
        duration: '8 min',
        content: `
          <h3>Visual Detection Techniques:</h3>
          <p>While deepfakes are becoming more sophisticated, there are still telltale signs that can help identify AI-generated content.</p>
          
          <h3>Image and Video Red Flags:</h3>
          <ul>
            <li><strong>Unnatural Movements:</strong> Jerky or robotic motion patterns</li>
            <li><strong>Facial Inconsistencies:</strong> Asymmetrical features or unnatural expressions</li>
            <li><strong>Lighting Issues:</strong> Inconsistent shadows or reflections</li>
            <li><strong>Background Artifacts:</strong> Blurry or distorted areas around the subject</li>
            <li><strong>Texture Problems:</strong> Smooth or artificial-looking skin and hair</li>
          </ul>
          
          <h3>Audio Detection Methods:</h3>
          <ul>
            <li><strong>Unnatural Pauses:</strong> Awkward breaks in speech patterns</li>
            <li><strong>Emotion Mismatch:</strong> Voice tone doesn't match facial expressions</li>
            <li><strong>Background Noise:</strong> Inconsistent audio quality or ambient sounds</li>
            <li><strong>Lip Sync Issues:</strong> Audio doesn't match mouth movements</li>
          </ul>
          
          <h3>Technical Detection Tools:</h3>
          <ul>
            <li><strong>Metadata Analysis:</strong> Check file properties for AI generation markers</li>
            <li><strong>Reverse Image Search:</strong> Find original sources or similar images</li>
            <li><strong>AI Detection Software:</strong> Use specialized tools designed to identify deepfakes</li>
            <li><strong>Forensic Analysis:</strong> Examine pixel patterns and compression artifacts</li>
          </ul>
        `,
        resources: [
          { name: 'Detection Checklist', type: 'PDF', url: '#' },
          { name: 'Visual Red Flags Guide', type: 'Infographic', url: '#' }
        ]
      },
      {
        id: 3,
        title: 'The Future of Synthetic Media',
        duration: '5 min',
        content: `
          <h3>Emerging Trends in AI-Generated Content:</h3>
          <p>As technology advances, deepfakes are becoming more sophisticated and harder to detect. Understanding these trends is crucial for staying ahead of the threat.</p>
          
          <h3>Current Developments:</h3>
          <ul>
            <li><strong>Improved Realism:</strong> Better facial expressions and natural movements</li>
            <li><strong>Real-Time Generation:</strong> Live deepfake creation during video calls</li>
            <li><strong>Multimodal AI:</strong> Systems that can generate multiple types of media simultaneously</li>
            <li><strong>Personalized Content:</strong> AI that learns individual characteristics</li>
          </ul>
          
          <h3>Potential Countermeasures:</h3>
          <ul>
            <li><strong>Digital Watermarking:</strong> Embedding invisible markers in authentic media</li>
            <li><strong>Blockchain Verification:</strong> Using distributed ledgers to verify authenticity</li>
            <li><strong>AI Detection Arms Race:</strong> Developing better detection tools</li>
            <li><strong>Media Literacy Education:</strong> Teaching people to be more critical consumers</li>
          </ul>
          
          <h3>Staying Protected:</h3>
          <ul>
            <li>Keep up with the latest detection techniques</li>
            <li>Use multiple verification methods</li>
            <li>Be skeptical of sensational or suspicious content</li>
            <li>Report suspected deepfakes to appropriate authorities</li>
            <li>Support research into detection and prevention</li>
          </ul>
        `,
        resources: [
          { name: 'Future Trends Report', type: 'PDF', url: '#' },
          { name: 'Protection Strategies', type: 'Document', url: '#' }
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
                You've successfully completed all lessons in "AI Deepfakes 101". 
                You now have the knowledge and skills to identify and understand AI-generated content.
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
                    Take a quiz to test what you've learned about AI deepfakes
                  </p>
                  <Link
                    to="/test"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center space-x-2"
                  >
                    <Brain className="h-4 w-4" />
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
      <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 via-transparent to-emerald-200/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/learn"
              className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-8 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Learning Center</span>
            </Link>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-6">
                <Brain className="h-4 w-4 mr-2" />
                Advanced Course
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
                  <div className="text-3xl font-bold text-green-600">{courseData.lessons.length}</div>
                  <div className="text-gray-600">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{courseData.duration}</div>
                  <div className="text-gray-600">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{courseData.difficulty}</div>
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
                className="bg-green-600 h-3 rounded-full transition-all duration-300"
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
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Course Lessons</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseData.lessons.map((lesson, index) => (
                <div 
                  key={lesson.id}
                  className={`bg-white rounded-xl p-6 border-2 transition-all duration-200 cursor-pointer ${
                    currentLesson === index
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-200'
                  }`}
                  onClick={() => setCurrentLesson(index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-green-600 font-bold">{lesson.id}</span>
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

export default LearnDeepfakes;
