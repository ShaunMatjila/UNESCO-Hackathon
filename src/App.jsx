import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import LearnFakeNews from './pages/LearnFakeNews';
import LearnDeepfakes from './pages/LearnDeepfakes';
import Test from './pages/Test';
import Check from './pages/Check';
import Community from './pages/Community';
import About from './pages/About';
import Leaderboard from './pages/Leaderboard';
import Resources from './pages/Resources';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/1" element={<LearnFakeNews />} />
            <Route path="/learn/2" element={<LearnDeepfakes />} />
            <Route path="/learn/1/lessons" element={<LearnFakeNews />} />
            <Route path="/learn/2/lessons" element={<LearnDeepfakes />} />
            <Route path="/test" element={<Test />} />
            <Route path="/check" element={<Check />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
