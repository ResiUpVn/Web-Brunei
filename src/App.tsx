import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Top10 from './pages/Top10';
import AmThuc from './pages/AmThuc';
import VanHoa from './pages/VanHoa';
import Ranking from './pages/Ranking';
import preloadImages from './utils/preloadImages';
import IMAGES_TO_PRELOAD from './data/imagesToPreload';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [votes, setVotes] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem('brunei-votes');
    return saved ? JSON.parse(saved) : {};
  });

  const handleVote = (destinationId: number) => {
    setVotes(prev => {
      const newVotes = { ...prev, [destinationId]: (prev[destinationId] || 0) + 1 };
      localStorage.setItem('brunei-votes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  // Preload important images on first load (non-blocking)
  useEffect(() => {
    const cancel = preloadImages(IMAGES_TO_PRELOAD, {
      onProgress: (loaded, total) => {
        // optionally: console.debug(`preloaded ${loaded}/${total}`)
      },
    })

    return () => cancel()
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-dia-diem" element={<Top10 votes={votes} />} />
            <Route path="/am-thuc" element={<AmThuc />} />
            <Route path="/van-hoa" element={<VanHoa />} />
            <Route path="/ranking" element={<Ranking votes={votes} onVote={handleVote} />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;