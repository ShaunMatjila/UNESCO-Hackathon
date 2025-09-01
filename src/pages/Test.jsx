import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, BookOpen, Target, Trophy, Clock } from 'lucide-react';

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Sample questions for media literacy
  const questions = [
    {
      question: "Which of the following is a red flag for fake news?",
      options: [
        "The article has multiple sources cited",
        "The headline uses ALL CAPS and exclamation marks",
        "The author provides their credentials",
        "The article includes data and statistics"
      ],
      correctAnswer: 1,
      explanation: "Headlines using ALL CAPS and excessive exclamation marks are common tactics used by fake news sites to grab attention and create emotional reactions."
    },
    {
      question: "What should you do when you encounter a suspicious image online?",
      options: [
        "Share it immediately to warn others",
        "Use reverse image search to check its origin",
        "Assume it's real if it looks professional",
        "Ignore it completely"
      ],
      correctAnswer: 1,
      explanation: "Reverse image search can help you find where an image originally appeared and whether it's being used out of context."
    },
    {
      question: "Which domain ending is most likely to be trustworthy?",
      options: [
        ".com",
        ".org",
        ".edu",
        ".biz"
      ],
      correctAnswer: 2,
      explanation: ".edu domains are reserved for educational institutions and are generally more trustworthy than commercial domains."
    },
    {
      question: "What's a good way to verify a news story?",
      options: [
        "Check if it's trending on social media",
        "Look for the same story on multiple reputable news sites",
        "Trust it if it confirms your existing beliefs",
        "Share it with friends to get their opinion"
      ],
      correctAnswer: 1,
      explanation: "Cross-referencing with multiple reputable news sources is one of the best ways to verify information."
    },
    {
      question: "Which of these is NOT a reliable fact-checking website?",
      options: [
        "Snopes.com",
        "FactCheck.org",
        "PolitiFact",
        "RandomBlog123.com"
      ],
      correctAnswer: 3,
      explanation: "RandomBlog123.com is not a recognized fact-checking organization, unlike the other options which are well-established fact-checking sites."
    }
  ];

  useEffect(() => {
    if (timeLeft > 0 && !showResult && !isQuizComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(null);
    }
  }, [timeLeft, showResult, isQuizComplete]);

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    
    setQuestionsAnswered(questionsAnswered + 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setIsQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuestionsAnswered(0);
    setTimeLeft(30);
    setIsQuizComplete(false);
  };

  const getScorePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 80) return "Excellent! You're a media literacy expert!";
    if (percentage >= 60) return "Good job! You have solid media literacy skills.";
    if (percentage >= 40) return "Not bad! Keep learning to improve your skills.";
    return "Keep practicing! Media literacy is a skill that improves with time.";
  };

  if (isQuizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Complete!</h1>
            <p className="text-xl text-gray-600">Great job completing the media literacy test</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Score</h3>
                <p className="text-3xl font-bold text-blue-600">{score}/{questions.length}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Percentage</h3>
                <p className="text-3xl font-bold text-green-600">{getScorePercentage()}%</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Questions</h3>
                <p className="text-3xl font-bold text-purple-600">{questionsAnswered}</p>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 mb-4">{getScoreMessage()}</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${getScorePercentage()}%` }}
                ></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={restartQuiz}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Take Quiz Again
              </button>
              <a
                href="/learn"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Performance Breakdown</h2>
            <div className="space-y-4">
              {questions.map((q, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${
                    index < score ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {index < score ? '✓' : '✗'}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{q.question}</p>
                    <p className="text-sm text-gray-600 mt-1">{q.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Media Literacy Test</h1>
          <p className="text-xl text-gray-600">Test your knowledge and improve your media literacy skills</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {/* Progress and Timer */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <div className="bg-blue-100 rounded-full p-3">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Question</p>
                <p className="text-lg font-semibold text-gray-900">
                  {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-red-100 rounded-full p-3">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Time Left</p>
                <p className={`text-lg font-semibold ${timeLeft <= 10 ? 'text-red-600' : 'text-gray-900'}`}>
                  {timeLeft}s
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h2>
            
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    showResult
                      ? index === currentQuestion.correctAnswer
                        ? 'border-green-500 bg-green-50 text-green-900'
                        : index === selectedAnswer && index !== currentQuestion.correctAnswer
                        ? 'border-red-500 bg-red-50 text-red-900'
                        : 'border-gray-200 bg-gray-50 text-gray-700'
                      : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showResult
                        ? index === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-500'
                          : index === selectedAnswer && index !== currentQuestion.correctAnswer
                          ? 'border-red-500 bg-red-500'
                          : 'border-gray-300'
                        : selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {showResult ? (
                        index === currentQuestion.correctAnswer ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : index === selectedAnswer && index !== currentQuestion.correctAnswer ? (
                          <XCircle className="h-4 w-4 text-white" />
                        ) : null
                      ) : selectedAnswer === index ? (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      ) : null}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Result and Next Button */}
          {showResult && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <CheckCircle className="h-8 w-8 text-green-600" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-600" />
                )}
                <h3 className={`text-xl font-semibold ${
                  selectedAnswer === currentQuestion.correctAnswer ? 'text-green-900' : 'text-red-900'
                }`}>
                  {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">{currentQuestion.explanation}</p>
              <button
                onClick={nextQuestion}
                className="btn-primary flex items-center gap-2"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Score Display */}
          <div className="text-center">
            <p className="text-lg text-gray-700">
              Current Score: <span className="font-semibold text-blue-600">{score}</span> / {questionsAnswered}
            </p>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Test Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Read Carefully</h3>
                <p className="text-gray-600">Take your time to read each question and all answer options thoroughly.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-full p-2 mt-1">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Trust Your Instincts</h3>
                <p className="text-gray-600">Your first impression is often correct, but don't rush your decision.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 rounded-full p-2 mt-1">
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Learn from Mistakes</h3>
                <p className="text-gray-600">Each wrong answer is an opportunity to learn and improve your skills.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 rounded-full p-2 mt-1">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Manage Your Time</h3>
                <p className="text-gray-600">You have 30 seconds per question, so balance speed with accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
