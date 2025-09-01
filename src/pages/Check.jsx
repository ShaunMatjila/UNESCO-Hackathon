import { useState } from 'react';
import { Search, CheckCircle, XCircle, AlertTriangle, Clock, TrendingUp, Target, FileText, Globe, Shield } from 'lucide-react';

const Check = () => {
  const [inputType, setInputType] = useState('text');
  const [factText, setFactText] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);

  const handleFactCheck = async (e) => {
    e.preventDefault();
    if (!factText.trim()) return;

    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResult = {
        status: Math.random() > 0.5 ? 'verified' : 'misleading',
        confidence: Math.floor(Math.random() * 40) + 60,
        explanation: 'This claim has been fact-checked by multiple sources. The information appears to be accurate based on current evidence and expert analysis.',
        sources: [
          'Reuters Fact Check',
          'PolitiFact',
          'Snopes'
        ],
        recommendations: [
          'Share this information responsibly',
          'Include source links when sharing',
          'Stay updated on any new developments'
        ]
      };
      
      setResult(mockResult);
      setIsChecking(false);
      window.scrollTo(0, 0);
    }, 2000);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'misleading':
        return <XCircle className="h-8 w-8 text-red-500" />;
      case 'unverified':
        return <AlertTriangle className="h-8 w-8 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-8 w-8 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'misleading':
        return 'text-red-600 bg-red-100 border-red-200';
      case 'unverified':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'verified':
        return 'Verified';
      case 'misleading':
        return 'Misleading';
      case 'unverified':
        return 'Unverified';
      default:
        return 'Unknown';
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
              <Search className="h-4 w-4 mr-2" />
              Fact-Checking Tool
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Verify Information
              <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Fact-Check Anything
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't let misinformation spread. Use our advanced fact-checking tool to verify claims, 
              news stories, and social media posts with trusted sources and expert analysis.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-gray-600">Facts Checked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Check Your Fact</h2>
            
            {/* Input Type Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-xl p-1">
                {['text', 'url', 'image'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setInputType(type)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      inputType === type
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {type === 'text' && <FileText className="h-4 w-4 inline mr-2" />}
                    {type === 'url' && <Globe className="h-4 w-4 inline mr-2" />}
                    {type === 'image' && <Target className="h-4 w-4 inline mr-2" />}
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleFactCheck} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {inputType === 'text' && 'Enter the claim or statement you want to verify'}
                  {inputType === 'url' && 'Paste the URL of the article or webpage'}
                  {inputType === 'image' && 'Upload an image to check for manipulation'}
                </label>
                
                {inputType === 'text' && (
                  <textarea
                    value={factText}
                    onChange={(e) => setFactText(e.target.value)}
                    placeholder="e.g., 'Scientists discover that drinking coffee makes you live 20 years longer'"
                    className="w-full h-32 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    required
                  />
                )}
                
                {inputType === 'url' && (
                  <input
                    type="url"
                    placeholder="https://example.com/article"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                )}
                
                {inputType === 'image' && (
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                    <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Drop your image here, or click to browse</p>
                    <p className="text-sm text-gray-500">Supports JPG, PNG, GIF up to 10MB</p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isChecking || !factText.trim()}
                className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isChecking || !factText.trim()
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-lg hover:shadow-primary-500/25'
                }`}
              >
                {isChecking ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Checking...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    <span>Check Fact</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Section */}
          {result && (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {getStatusIcon(result.status)}
                </div>
                <span className={`inline-flex px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(result.status)}`}>
                  {getStatusText(result.status)}
                </span>
                <div className="mt-4 text-2xl font-bold text-gray-900">
                  {result.confidence}% Confidence
                </div>
              </div>

              {/* Explanation */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Analysis</h3>
                <p className="text-gray-600 leading-relaxed">{result.explanation}</p>
              </div>

              {/* Sources */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Trusted Sources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {result.sources.map((source, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                      <Shield className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-900">{source}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recommendations</h3>
                <ul className="space-y-3">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Additional Resources */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Fact-Checking Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Check Multiple Sources</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Don't rely on a single source. Cross-reference information across multiple reputable outlets.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Check the Date</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Information can become outdated quickly. Always verify when the information was published.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;
