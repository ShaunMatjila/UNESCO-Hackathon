import { useState } from 'react';
import { Users, MessageCircle, Calendar, Send, ThumbsUp, Share2, User } from 'lucide-react';

const Community = () => {
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  // Mock data for the Question of the Day
  const questionOfTheDay = {
    id: 1,
    question: "How do you verify the credibility of a news source you've never heard of before?",
    date: new Date().toLocaleDateString(),
    category: "Source Verification",
    responses: 24,
    likes: 156
  };

  // Mock comments data
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "MediaLiteracyPro",
      content: "I always start by checking the 'About Us' page and looking for editorial policies. If they don't have clear standards or contact information, that's a red flag.",
      timestamp: "2 hours ago",
      likes: 12,
      replies: 3
    },
    {
      id: 2,
      author: "FactChecker2024",
      content: "Great question! I use a three-step process: 1) Check if they cite sources, 2) Look for author credentials, 3) Cross-reference with known reliable outlets.",
      timestamp: "4 hours ago",
      likes: 8,
      replies: 1
    },
    {
      id: 3,
      author: "DigitalCitizen",
      content: "I also check if they have a corrections policy. Reputable news organizations are transparent about their mistakes and have clear processes for corrections.",
      timestamp: "6 hours ago",
      likes: 15,
      replies: 2
    },
    {
      id: 4,
      author: "NewsNavigator",
      content: "Don't forget to check the domain age and look for any obvious bias in their reporting history. Sometimes you can find reviews from other fact-checking organizations.",
      timestamp: "8 hours ago",
      likes: 6,
      replies: 0
    }
  ]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;

    const newCommentObj = {
      id: comments.length + 1,
      author: userName,
      content: newComment,
      timestamp: "Just now",
      likes: 0,
      replies: 0
    };

    setComments([newCommentObj, ...comments]);
    setNewComment('');
  };

  const handleLike = (commentId) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Community</h1>
          </div>
          <p className="text-lg text-gray-600">
            Join the conversation about media literacy and fact-checking
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Question of the Day */}
        <div className="card mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-primary-600" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Question of the Day</h2>
                <p className="text-sm text-gray-500">{questionOfTheDay.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{questionOfTheDay.responses}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{questionOfTheDay.likes}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6 mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-semibold">Q</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {questionOfTheDay.question}
                </h3>
                <span className="inline-block bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm">
                  {questionOfTheDay.category}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="btn-primary flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>Join Discussion</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Discussion Thread */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Community Responses</h3>

          {/* Add Comment Form */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <div className="text-sm text-gray-500 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Anonymous users are welcome
                </div>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Share your thoughts on today's question..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  rows={3}
                />
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className={`absolute bottom-2 right-2 p-2 rounded-lg ${
                    newComment.trim() 
                      ? 'bg-primary-600 text-white hover:bg-primary-700' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-semibold">
                      {comment.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-gray-900">{comment.author}</span>
                      <span className="text-sm text-gray-500">{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{comment.content}</p>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(comment.id)}
                        className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">{comment.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">Reply</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="card mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Be Respectful</h4>
              <p>Treat others with kindness and respect. Disagreements are welcome, but personal attacks are not.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Stay on Topic</h4>
              <p>Keep discussions focused on media literacy, fact-checking, and related topics.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Cite Sources</h4>
              <p>When making claims, provide credible sources to support your arguments.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Be Constructive</h4>
              <p>Share insights and experiences that help others learn and improve their media literacy skills.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
