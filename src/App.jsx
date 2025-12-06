import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Enterprise from './pages/Enterprise';
import Education from './pages/Education';
import Developer from './pages/Developer';
import Docs from './pages/Docs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16"> {/* 为固定导航栏预留空间 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/education" element={<Education />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 页面（可选） */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;