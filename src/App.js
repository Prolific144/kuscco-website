import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // Only Navbar needed
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import NewsPage from './pages/NewsPage';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Only Navbar needed - it contains both top bar and main navigation */}
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/resources" element={<Resources />} />
            
            {/* Sub-routes for About */}
            <Route path="/about/history" element={<About />} />
            <Route path="/about/mission" element={<About />} />
            <Route path="/about/board" element={<About />} />
            <Route path="/about/management" element={<About />} />
            
            {/* Sub-routes for Services */}
            <Route path="/services/insurance" element={<Services />} />
            <Route path="/services/financial" element={<Services />} />
            <Route path="/services/consultancy" element={<Services />} />
            <Route path="/services/capacity-building" element={<Services />} />
            <Route path="/services/advocacy" element={<Services />} />
            <Route path="/services/research" element={<Services />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;