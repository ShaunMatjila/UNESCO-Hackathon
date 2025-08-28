import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TestTube, Trophy, BarChart3, Calendar, Users, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const Test = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const levels = [
    {
      id: 'beginner',
      name: 'Beginner',
      description: 'Perfect for those new to media literacy',
      questions: 10,
      color: 'green',
      questions: [
        {
          question: 'What is the first step you should take when encountering a news article?',
          options: [
            'Share it immediately on social media',
            'Read the headline and make a quick judgment',
            'Check the source and author credentials',
            'Look at the comments section'
          ],
          correct: 2,
          explanation: 'Always start by checking the source and author credentials. This helps establish the credibility of the information before reading the content.'
        },
        {
          question: 'Which of the following is a red flag for fake news?',
          options: [
            'Professional website design',
            'Multiple sources cited',
            'Sensational or emotional headlines',
            'Author contact information provided'
          ],
          correct: 2,
          explanation: 'Sensational or emotional headlines are often used to manipulate readers and are a common characteristic of fake news.'
        },
        {
          question: 'What does "clickbait" refer to?',
          options: [
            'A type of computer virus',
            'Headlines designed to get clicks',
            'A fact-checking tool',
            'A news organization'
          ],
          correct: 1,
          explanation: 'Clickbait refers to headlines designed to attract attention and encourage visitors to click on a link, often at the expense of accuracy.'
        }
      ]
    },
    {
      id: 'intermediate',
      name: 'Intermediate',
      description: 'For those with some media literacy experience',
      questions: 10,
      color: 'blue',
      questions: [
        {
          question: 'What is the difference between bias and fake news?',
          options: [
            'There is no difference',
            'Bias is intentional deception, fake news is accidental',
            'Bias is a perspective, fake news is false information',
            'Bias only exists in print media'
          ],
          correct: 2,
          explanation: 'Bias is a perspective or preference that may influence reporting, while fake news is deliberately false information presented as news.'
        },
        {
          question: 'Which tool is most effective for fact-checking images?',
          options: [
            'Google Images reverse search',
            'Social media comments',
            'Wikipedia',
            'News aggregators'
          ],
          correct: 0,
          explanation: 'Google Images reverse search allows you to find where an image originally appeared and check if it has been manipulated or taken out of context.'
        },
        {
          question: 'What is confirmation bias?',
          options: [
            'A type of computer virus',
            'The tendency to seek information that confirms existing beliefs',
            'A fact-checking methodology',
            'A news verification tool'
          ],
          correct: 1,
          explanation: 'Confirmation bias is the tendency to search for, interpret, and remember information in a way that confirms one\'s preexisting beliefs.'
        }
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: 'For media literacy experts',
      questions: 10,
      color: 'purple',
      questions: [
        {
          question: 'What is the "filter bubble" effect?',
          options: [
            'A type of internet censorship',
            'When algorithms show only information that aligns with your views',
            'A fact-checking technique',
            'A news verification tool'
          ],
          correct: 1,
          explanation: 'The filter bubble effect occurs when algorithms personalize content to show only information that aligns with your existing views and preferences.'
        },
        {
          question: 'How can you identify AI-generated text?',
          options: [
            'It always has grammatical errors',
            'It\'s impossible to identify',
            'Look for repetitive patterns and lack of nuance',
            'It\'s always shorter than human text'
          ],
          correct: 2,
          explanation: 'AI-generated text often has repetitive patterns, lacks nuanced understanding, and may contain factual inconsistencies.'
        },
        {
          question: 'What is the purpose of a fact-checking organization?',
          options: [
            'To promote specific political views',
            'To verify claims and provide accurate information',
            'To generate advertising revenue',
            'To entertain readers'
          ],
          correct: 1,
          explanation: 'Fact-checking organizations exist to verify claims, statements, and news stories to provide the public with accurate information.'
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color] || colors.green;
  };

  const getBadge = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return { name: 'Truth Master', color: 'text-yellow-600' };
    if (percentage >= 80) return { name: 'Fact Finder', color: 'text-blue-600' };
    if (percentage >= 70) return { name: 'Truth Explorer', color: 'text-green-600' };
    if (percentage >= 60) return { name: 'Media Navigator', color: 'text-purple-600' };
    return { name: 'Learning Pathfinder', color: 'text-gray-600' };
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const currentQ = selectedLevel.questions[currentQuestion];
    const isCorrect = selectedAnswer === currentQ.correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      
      if (currentQuestion + 1 < selectedLevel.questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  if (showResult) {
    const badge = getBadge(score, selectedLevel.questions.length);
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="card text-center">
            <div className="mb-8">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h1>
              <div className={`text-2xl font-bold ${badge.color} mb-2`}>
                {badge.name}
              </div>
              <p className="text-gray-600">
                You scored {score} out of {selectedLevel.questions.length} ({Math.round((score / selectedLevel.questions.length) * 100)}%)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={resetQuiz} className="btn-primary">
                Play Again
              </button>
              <Link to="/leaderboard" className="btn-secondary flex items-center justify-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>View Leaderboard</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedLevel) {
    const currentQ = selectedLevel.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedLevel.questions.length) * 100;

    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedLevel.name} Level
              </h2>
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {selectedLevel.questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {currentQ.question}
            </h3>

            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium text-gray-900">{option}</span>
                </button>
              ))}
            </div>

            {showFeedback && (
              <div className={`p-4 rounded-lg mb-6 ${
                selectedAnswer === currentQ.correct 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {selectedAnswer === currentQ.correct ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-semibold ${
                    selectedAnswer === currentQ.correct ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {selectedAnswer === currentQ.correct ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <p className="text-gray-700">{currentQ.explanation}</p>
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={resetQuiz}
                className="btn-secondary"
              >
                Exit Quiz
              </button>
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={`btn-primary ${selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Submit Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <TestTube className="h-8 w-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Test Your Knowledge</h1>
          </div>
          <p className="text-lg text-gray-600">
            Challenge yourself with interactive quizzes and track your progress
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Level Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {levels.map((level) => (
            <div key={level.id} className="card text-center group hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${getColorClasses(level.color)}`}>
                <TestTube className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{level.name}</h3>
              <p className="text-gray-600 mb-4">{level.description}</p>
              <div className="text-sm text-gray-500 mb-6">{level.questions.length} questions</div>
              <button
                onClick={() => setSelectedLevel(level)}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <span>Start Quiz</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="h-6 w-6 text-primary-600" />
              <h3 className="text-lg font-semibold text-gray-900">Question of the Day</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Test your knowledge with our daily rotating question and join the community discussion.
            </p>
            <Link to="/community" className="btn-secondary">
              Try Today's Question
            </Link>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="h-6 w-6 text-primary-600" />
              <h3 className="text-lg font-semibold text-gray-900">Leaderboard</h3>
            </div>
            <p className="text-gray-600 mb-4">
              See how you rank against other learners and track your improvement over time.
            </p>
            <Link to="/leaderboard" className="btn-secondary">
              View Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
