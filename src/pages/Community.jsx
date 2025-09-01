import { useState } from 'react';
import { Users, MessageCircle, Heart, Share2, TrendingUp, Award, Star, Clock, User, ThumbsUp } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [commentText, setCommentText] = useState('');
  const [questionResponse, setQuestionResponse] = useState('');
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [showDiscussionDetail, setShowDiscussionDetail] = useState(false);
  const [questionResponses, setQuestionResponses] = useState([
    {
      id: 1,
      author: "FactChecker",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "I always start by checking the source's about page and then cross-reference with multiple outlets.",
      timeAgo: "1 hour ago",
      likes: 12
    },
    {
      id: 2,
      author: "MediaMentor",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Don't forget to check the author's credentials and look for any conflicts of interest.",
      timeAgo: "2 hours ago",
      likes: 8
    }
  ]);

  const handleSubmitQuestionResponse = (e) => {
    e.preventDefault();
    if (questionResponse.trim()) {
      const newResponse = {
        id: questionResponses.length + 1,
        author: "You",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        content: questionResponse,
        timeAgo: "Just now",
        likes: 0
      };
      setQuestionResponses([newResponse, ...questionResponses]);
      setQuestionResponse('');
      setShowQuestionForm(false);
    }
  };

  const handleViewDiscussion = (discussion) => {
    setSelectedDiscussion(discussion);
    setShowDiscussionDetail(true);
  };

  const handleCloseDiscussion = () => {
    setShowDiscussionDetail(false);
    setSelectedDiscussion(null);
  };

  const communityData = {
    questionOfTheDay: {
      question: "What's your most effective method for verifying news sources?",
      author: "MediaLiteracyExpert",
      responses: 24,
      likes: 156,
      category: "Fact-Checking"
    },
    discussions: [
      {
        id: 1,
        title: "How do you spot deepfakes in social media?",
        author: "DigitalDetective",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        content: "I've been seeing more AI-generated content lately. What are your go-to techniques for identifying deepfakes? I'm particularly interested in visual cues and tools that can help detect manipulated images and videos.",
        category: "AI & Deepfakes",
        responses: 18,
        likes: 89,
        timeAgo: "2 hours ago",
        isPinned: true,
        detailedResponses: [
          {
            id: 1,
            author: "TechSleuth",
            content: "Look for unnatural facial movements, especially around the eyes and mouth. Deepfakes often have subtle glitches in these areas.",
            timeAgo: "1 hour ago",
            likes: 15
          },
          {
            id: 2,
            author: "MediaAnalyst",
            content: "Check for inconsistent lighting and shadows. AI often struggles with maintaining realistic lighting across the entire frame.",
            timeAgo: "45 min ago",
            likes: 12
          },
          {
            id: 3,
            author: "DeepfakeHunter",
            content: "Use reverse image search and check if the same face appears in multiple unrelated contexts. Also, look for artifacts around the edges of faces.",
            timeAgo: "30 min ago",
            likes: 8
          }
        ]
      },
      {
        id: 2,
        title: "Best fact-checking tools for beginners?",
        author: "NewsNovice",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        content: "Just starting my media literacy journey. What tools would you recommend for someone new to fact-checking? I want to build good habits from the start.",
        category: "Tools & Resources",
        responses: 32,
        likes: 124,
        timeAgo: "5 hours ago",
        isPinned: false,
        detailedResponses: [
          {
            id: 1,
            author: "FactCheckPro",
            content: "Start with Snopes and FactCheck.org. They're reliable and easy to use. Also, learn to use Google's fact-checking tools.",
            timeAgo: "4 hours ago",
            likes: 23
          },
          {
            id: 2,
            author: "TruthSeeker",
            content: "Don't forget about reverse image search! It's amazing how many fake images get shared. Google Images and TinEye are your friends.",
            timeAgo: "3 hours ago",
            likes: 18
          },
          {
            id: 3,
            author: "MediaMentor",
            content: "Build a habit of checking multiple sources. If a story seems too good to be true, it probably is. Always verify before sharing.",
            timeAgo: "2 hours ago",
            likes: 14
          }
        ]
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Topics', count: 156 },
    { id: 'fact-checking', name: 'Fact-Checking', count: 45 },
    { id: 'ai-deepfakes', name: 'AI & Deepfakes', count: 32 },
    { id: 'social-media', name: 'Social Media', count: 28 }
  ];

  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 via-transparent to-blue-200/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
              <Users className="h-4 w-4 mr-2" />
              Community Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join the Discussion
              <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Media Literacy Community
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow learners, share insights, and discuss the latest challenges in media literacy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">2.4K+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">156</div>
                <div className="text-gray-600">Discussions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">1.2K+</div>
                <div className="text-gray-600">Comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="inline-flex px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    Question of the Day
                  </span>
                  <span className="text-sm text-gray-500">by {communityData.questionOfTheDay.author}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {communityData.questionOfTheDay.question}
                </h2>
                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>{questionResponses.length} responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4" />
                    <span>{communityData.questionOfTheDay.likes} likes</span>
                  </div>
                </div>

                {/* Response Form */}
                {!showQuestionForm ? (
                  <button
                    onClick={() => setShowQuestionForm(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg"
                  >
                    Add Your Response
                  </button>
                ) : (
                  <form onSubmit={handleSubmitQuestionResponse} className="space-y-4">
                    <textarea
                      value={questionResponse}
                      onChange={(e) => setQuestionResponse(e.target.value)}
                      placeholder="Share your thoughts on this question..."
                      className="w-full h-24 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                      required
                    />
                    <div className="flex space-x-3">
                      <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200"
                      >
                        Submit Response
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowQuestionForm(false)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-xl font-medium transition-all duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                {/* Responses */}
                {questionResponses.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Responses</h3>
                    <div className="space-y-4">
                      {questionResponses.map((response) => (
                        <div key={response.id} className="bg-white rounded-xl p-4 border border-gray-200">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                              <User className="h-4 w-4 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium text-gray-900">{response.author}</span>
                                <span className="text-xs text-gray-500">{response.timeAgo}</span>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">{response.content}</p>
                              <div className="flex items-center space-x-2 mt-2">
                                <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-600">
                                  <ThumbsUp className="h-3 w-3" />
                                  <span>{response.likes}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Discussions</h2>
              <div className="space-y-6">
                {communityData.discussions.map((discussion) => (
                  <div 
                    key={discussion.id} 
                    className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => handleViewDiscussion(discussion)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{discussion.title}</h3>
                          <span className="inline-flex px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                            {discussion.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">{discussion.content}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4" />
                              <span>{discussion.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>{discussion.timeAgo}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors duration-200">
                              <MessageCircle className="h-4 w-4" />
                              <span>{discussion.responses}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors duration-200">
                              <Heart className="h-4 w-4" />
                              <span>{discussion.likes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Community Guidelines</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Be respectful and constructive in discussions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Share evidence-based information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Report misinformation when you see it</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Start a Discussion</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Have a question or want to share insights? Start a new discussion with the community.
                </p>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25">
                  New Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discussion Detail Modal */}
      {showDiscussionDetail && selectedDiscussion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full`}>
                    {selectedDiscussion.category}
                  </span>
                  {selectedDiscussion.isPinned && (
                    <span className="inline-flex px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      Pinned
                    </span>
                  )}
                </div>
                <button
                  onClick={handleCloseDiscussion}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{selectedDiscussion.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{selectedDiscussion.content}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{selectedDiscussion.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedDiscussion.timeAgo}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{selectedDiscussion.responses} responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>{selectedDiscussion.likes} likes</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Responses</h3>
              <div className="space-y-4">
                {selectedDiscussion.detailedResponses.map((response) => (
                  <div key={response.id} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-gray-900">{response.author}</span>
                          <span className="text-xs text-gray-500">{response.timeAgo}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{response.content}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-600">
                            <ThumbsUp className="h-3 w-3" />
                            <span>{response.likes}</span>
                          </button>
                        </div>
                      </div>
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

export default Community;
