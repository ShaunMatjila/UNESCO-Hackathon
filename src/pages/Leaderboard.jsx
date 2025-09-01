import { useState } from 'react';
import { Trophy, Medal, Crown, Star, TrendingUp, Users, Target, Award, User } from 'lucide-react';

const Leaderboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('score');

  const leaderboardData = [
    {
      id: 1,
      rank: 1,
      username: 'MediaMaster',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      score: 9850,
      level: 'Expert',
      testsCompleted: 47,
      accuracy: 94.2,
      streak: 28,
      badge: 'gold'
    },
    {
      id: 2,
      rank: 2,
      username: 'FactFinder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      score: 9420,
      level: 'Expert',
      testsCompleted: 42,
      accuracy: 91.8,
      streak: 25,
      badge: 'silver'
    },
    {
      id: 3,
      rank: 3,
      username: 'TruthSeeker',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      score: 9180,
      level: 'Advanced',
      testsCompleted: 38,
      accuracy: 89.5,
      streak: 22,
      badge: 'bronze'
    }
  ];

  const getBadgeIcon = (badge, rank) => {
    if (badge === 'gold') return <Crown className="h-5 w-5 text-yellow-500" />;
    if (badge === 'silver') return <Medal className="h-5 w-5 text-gray-400" />;
    if (badge === 'bronze') return <Medal className="h-5 w-5 text-amber-600" />;
    if (rank <= 3) return <Star className="h-5 w-5 text-yellow-400" />;
    return null;
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-purple-600 bg-purple-100';
      case 'Advanced': return 'text-blue-600 bg-blue-100';
      case 'Intermediate': return 'text-green-600 bg-green-100';
      case 'Beginner': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 via-transparent to-blue-200/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
              <Trophy className="h-4 w-4 mr-2" />
              Global Rankings
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Leaderboard
              <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Top Performers
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              See how you rank among media literacy champions. Track your progress, compare scores, 
              and compete with learners worldwide.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">{leaderboardData.length}</div>
                <div className="text-gray-600">Top Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">9850</div>
                <div className="text-gray-600">Highest Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">94.2%</div>
                <div className="text-gray-600">Best Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Controls */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Leaderboard Rankings</h2>
                <p className="text-gray-600">Filter and sort by different criteria to find your position</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Levels</option>
                  <option value="Expert">Expert</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Beginner">Beginner</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="score">Sort by Score</option>
                  <option value="accuracy">Sort by Accuracy</option>
                  <option value="tests">Sort by Tests</option>
                  <option value="streak">Sort by Streak</option>
                </select>
              </div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-50 to-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Player</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Score</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Level</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Tests</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Accuracy</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Streak</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leaderboardData.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary-100 to-blue-100">
                            {getBadgeIcon(user.badge, user.rank)}
                            <span className="font-bold text-primary-700">{user.rank}</span>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{user.username}</div>
                            <div className="text-sm text-gray-500">ID: {user.id}</div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <div className="font-bold text-2xl text-primary-600">{user.score.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">points</div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(user.level)}`}>
                          {user.level}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <Target className="h-4 w-4 text-gray-400" />
                          <span className="font-semibold text-gray-900">{user.testsCompleted}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="font-semibold text-gray-900">{user.accuracy}%</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-semibold text-gray-900">{user.streak} days</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Improve Section */}
          <div className="mt-20 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Improve Your Ranking</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Complete More Tests</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Take regular assessments to build your knowledge and improve your overall score.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Focus on Accuracy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Quality over quantity. Take your time to answer correctly and maintain high accuracy rates.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Build Daily Streaks</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Practice consistently to maintain streaks and earn bonus points for dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
