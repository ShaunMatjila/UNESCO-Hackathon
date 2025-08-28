import { useState } from 'react';
import { BarChart3, Trophy, Medal, Award, TrendingUp, Users, Calendar } from 'lucide-react';

const Leaderboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Mock leaderboard data
  const leaderboardData = [
    {
      id: 1,
      name: "TruthSeeker2024",
      score: 98,
      level: "Advanced",
      country: "Canada",
      badge: "Truth Master",
      quizzesTaken: 15,
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "MediaLiteracyPro",
      score: 95,
      level: "Advanced",
      country: "United States",
      badge: "Fact Finder",
      quizzesTaken: 12,
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "DigitalCitizen",
      score: 92,
      level: "Intermediate",
      country: "United Kingdom",
      badge: "Truth Explorer",
      quizzesTaken: 8,
      lastActive: "3 hours ago"
    },
    {
      id: 4,
      name: "FactCheckerSarah",
      score: 89,
      level: "Advanced",
      country: "Australia",
      badge: "Media Navigator",
      quizzesTaken: 10,
      lastActive: "5 hours ago"
    },
    {
      id: 5,
      name: "NewsNavigator",
      score: 87,
      level: "Intermediate",
      country: "Germany",
      badge: "Truth Explorer",
      quizzesTaken: 6,
      lastActive: "1 day ago"
    },
    {
      id: 6,
      name: "CriticalThinker",
      score: 85,
      level: "Beginner",
      country: "Netherlands",
      badge: "Media Navigator",
      quizzesTaken: 4,
      lastActive: "2 days ago"
    },
    {
      id: 7,
      name: "InfoDetective",
      score: 83,
      level: "Intermediate",
      country: "Sweden",
      badge: "Learning Pathfinder",
      quizzesTaken: 7,
      lastActive: "6 hours ago"
    },
    {
      id: 8,
      name: "VerificationVet",
      score: 81,
      level: "Advanced",
      country: "Norway",
      badge: "Media Navigator",
      quizzesTaken: 9,
      lastActive: "1 day ago"
    },
    {
      id: 9,
      name: "SourceScout",
      score: 79,
      level: "Beginner",
      country: "Finland",
      badge: "Learning Pathfinder",
      quizzesTaken: 3,
      lastActive: "3 days ago"
    },
    {
      id: 10,
      name: "BiasBuster",
      score: 77,
      level: "Intermediate",
      country: "Denmark",
      badge: "Learning Pathfinder",
      quizzesTaken: 5,
      lastActive: "4 hours ago"
    }
  ];

  const getBadgeColor = (badge) => {
    const colors = {
      'Truth Master': 'text-yellow-600 bg-yellow-100',
      'Fact Finder': 'text-blue-600 bg-blue-100',
      'Truth Explorer': 'text-green-600 bg-green-100',
      'Media Navigator': 'text-purple-600 bg-purple-100',
      'Learning Pathfinder': 'text-gray-600 bg-gray-100'
    };
    return colors[badge] || colors['Learning Pathfinder'];
  };

  const getLevelColor = (level) => {
    const colors = {
      'Beginner': 'text-green-600 bg-green-100',
      'Intermediate': 'text-blue-600 bg-blue-100',
      'Advanced': 'text-purple-600 bg-purple-100'
    };
    return colors[level] || colors['Beginner'];
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Award className="h-5 w-5 text-orange-500" />;
    return <span className="text-lg font-bold text-gray-400">{rank}</span>;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="h-8 w-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
          </div>
          <p className="text-lg text-gray-600">
            See how you rank against other learners worldwide
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="h-6 w-6 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">1,247</span>
            </div>
            <p className="text-gray-600">Total Participants</p>
          </div>
          <div className="card text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span className="text-2xl font-bold text-gray-900">98</span>
            </div>
            <p className="text-gray-600">Highest Score</p>
          </div>
          <div className="card text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <span className="text-2xl font-bold text-gray-900">73</span>
            </div>
            <p className="text-gray-600">Average Score</p>
          </div>
          <div className="card text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calendar className="h-6 w-6 text-blue-500" />
              <span className="text-2xl font-bold text-gray-900">156</span>
            </div>
            <p className="text-gray-600">Quizzes Today</p>
          </div>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <h2 className="text-xl font-bold text-gray-900">Global Rankings</h2>
            <div className="flex space-x-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Time</option>
                <option value="month">This Month</option>
                <option value="week">This Week</option>
                <option value="today">Today</option>
              </select>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Rank</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">User</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Score</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Level</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Badge</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Quizzes</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Country</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Last Active</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((user, index) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        {getRankIcon(index + 1)}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-semibold text-sm">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-xl font-bold text-primary-600">{user.score}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(user.level)}`}>
                        {user.level}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(user.badge)}`}>
                        {user.badge}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-600">{user.quizzesTaken}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-600">{user.country}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-500">{user.lastActive}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Improve */}
        <div className="card mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Improve Your Ranking</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Take More Quizzes</h4>
              <p className="text-sm text-gray-600">
                Practice regularly with quizzes at different difficulty levels to improve your skills.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Complete Courses</h4>
              <p className="text-sm text-gray-600">
                Finish learning modules to unlock advanced content and earn higher scores.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Engage with Community</h4>
              <p className="text-sm text-gray-600">
                Participate in discussions and share insights to earn bonus points.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
