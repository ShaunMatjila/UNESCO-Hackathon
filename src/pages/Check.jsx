import { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, XCircle, HelpCircle, ExternalLink, Copy } from 'lucide-react';

const Check = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputType, setInputType] = useState('text');

  // Mock trusted and flagged sources (in a real app, this would come from Firebase)
  const trustedSources = [
    'reuters.com',
    'ap.org',
    'bbc.com',
    'npr.org',
    'pbs.org',
    'factcheck.org',
    'snopes.com',
    'politifact.com',
    'washingtonpost.com',
    'nytimes.com',
    'wsj.com',
    'theguardian.com'
  ];

  const flaggedSources = [
    'fake-news-site.com',
    'conspiracy-theory.net',
    'clickbait-news.org',
    'satire-site.com',
    'unreliable-source.net'
  ];

  const extractDomain = (url) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain;
    } catch {
      return null;
    }
  };

  const analyzeContent = (text) => {
    const lowerText = text.toLowerCase();
    
    // Check for common fake news indicators
    const redFlags = [
      'shocking',
      'you won\'t believe',
      'doctors hate this',
      'one weird trick',
      'this will change everything',
      'they don\'t want you to know',
      'secret',
      'conspiracy',
      'cover-up',
      'mainstream media won\'t report'
    ];

    const foundRedFlags = redFlags.filter(flag => lowerText.includes(flag));
    
    return {
      hasRedFlags: foundRedFlags.length > 0,
      redFlags: foundRedFlags,
      credibility: foundRedFlags.length > 2 ? 'low' : foundRedFlags.length > 0 ? 'medium' : 'high'
    };
  };

  const checkFact = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    let analysis = {
      type: inputType,
      input: inputText,
      result: 'needs_verification',
      confidence: 'medium',
      explanation: '',
      recommendations: []
    };

    if (inputType === 'url') {
      const domain = extractDomain(inputText);
      
      if (domain) {
        if (trustedSources.some(source => domain.includes(source))) {
          analysis.result = 'credible';
          analysis.confidence = 'high';
          analysis.explanation = 'This source is known for reliable, fact-checked reporting and follows journalistic standards.';
          analysis.recommendations = [
            'Read the full article to understand the complete context',
            'Check the publication date to ensure information is current',
            'Look for multiple sources confirming the same information'
          ];
        } else if (flaggedSources.some(source => domain.includes(source))) {
          analysis.result = 'unreliable';
          analysis.confidence = 'high';
          analysis.explanation = 'This source has a history of publishing misleading or false information.';
          analysis.recommendations = [
            'Seek information from multiple credible sources',
            'Use fact-checking websites to verify claims',
            'Be skeptical of sensational or emotional language'
          ];
        } else {
          analysis.result = 'needs_verification';
          analysis.confidence = 'medium';
          analysis.explanation = 'This source is not in our database. Additional verification is recommended.';
          analysis.recommendations = [
            'Check the source\'s about page and editorial policies',
            'Look for author credentials and contact information',
            'Cross-reference with known reliable sources',
            'Use fact-checking tools to verify specific claims'
          ];
        }
      }
    } else {
      // Text/headline analysis
      const contentAnalysis = analyzeContent(inputText);
      
      if (contentAnalysis.hasRedFlags) {
        analysis.result = 'suspicious';
        analysis.confidence = 'high';
        analysis.explanation = `This content contains several red flags commonly associated with misleading information: ${contentAnalysis.redFlags.join(', ')}.`;
        analysis.recommendations = [
          'Verify claims with multiple credible sources',
          'Check if the information is reported by established news organizations',
          'Be cautious of emotional or sensational language',
          'Use fact-checking websites to verify specific claims'
        ];
      } else {
        analysis.result = 'appears_reliable';
        analysis.confidence = 'medium';
        analysis.explanation = 'This content doesn\'t contain obvious red flags, but verification is still recommended.';
        analysis.recommendations = [
          'Verify with multiple sources',
          'Check the original source of the information',
          'Look for supporting evidence or citations'
        ];
      }
    }

    setResult(analysis);
    setIsLoading(false);
  };

  const getResultIcon = (result) => {
    switch (result) {
      case 'credible':
        return <CheckCircle className="h-8 w-8 text-green-600" />;
      case 'unreliable':
      case 'suspicious':
        return <XCircle className="h-8 w-8 text-red-600" />;
      default:
        return <AlertTriangle className="h-8 w-8 text-yellow-600" />;
    }
  };

  const getResultColor = (result) => {
    switch (result) {
      case 'credible':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'unreliable':
      case 'suspicious':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inputText);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Search className="h-8 w-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Fact Check Tool</h1>
          </div>
          <p className="text-lg text-gray-600">
            Verify the credibility of news articles, URLs, and claims with our AI-powered fact-checking tool
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Input Section */}
        <div className="card mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What would you like to fact-check?</h2>
            
            {/* Input Type Selector */}
            <div className="flex space-x-4 mb-6">
              {[
                { id: 'text', label: 'Text/Headline', icon: '📝' },
                { id: 'url', label: 'URL/Link', icon: '🔗' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setInputType(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                    inputType === type.id
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span>{type.icon}</span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>

            {/* Input Field */}
            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  inputType === 'url' 
                    ? 'Paste a URL or link here...' 
                    : 'Paste a headline, claim, or text here...'
                }
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                rows={4}
              />
              {inputText && (
                <button
                  onClick={copyToClipboard}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600"
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <button
            onClick={checkFact}
            disabled={!inputText.trim() || isLoading}
            className={`btn-primary w-full ${(!inputText.trim() || isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Analyzing...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Check Fact</span>
              </div>
            )}
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div className="card">
            <div className="flex items-start space-x-4 mb-6">
              {getResultIcon(result.result)}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Analysis Result
                </h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getResultColor(result.result)}`}>
                  {result.result.replace('_', ' ').toUpperCase()}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Explanation */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Explanation</h4>
                <p className="text-gray-700">{result.explanation}</p>
              </div>

              {/* Recommendations */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Recommendations</h4>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Resources */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-primary-600" />
                  <span>Additional Resources</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { name: 'Snopes', url: 'https://snopes.com' },
                    { name: 'FactCheck.org', url: 'https://factcheck.org' },
                    { name: 'PolitiFact', url: 'https://politifact.com' },
                    { name: 'Reuters Fact Check', url: 'https://reuters.com/fact-check' }
                  ].map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>{resource.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="card mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fact-Checking Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Check the Source</h4>
              <p className="text-sm text-gray-600">
                Look for established news organizations with editorial standards and fact-checking processes.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Read Beyond Headlines</h4>
              <p className="text-sm text-gray-600">
                Headlines can be misleading. Read the full article to understand the complete context.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Check the Date</h4>
              <p className="text-sm text-gray-600">
                Old articles may contain outdated information. Always check the publication date.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Cross-Reference</h4>
              <p className="text-sm text-gray-600">
                Verify information with multiple credible sources to ensure accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;
