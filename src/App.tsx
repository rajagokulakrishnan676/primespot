import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyBookingButton from './components/StickyBookingButton';
import LiveChat from './components/LiveChat';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Branches from './pages/Branches';
import BookAppointment from './pages/BookAppointment';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <StickyBookingButton />
        <LiveChat />
      </div>
    </Router>
  );
}

export default App;
