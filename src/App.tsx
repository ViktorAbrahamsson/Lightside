import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { ScrollToTop } from '@/components/common/ScrollToTop/ScrollToTop';
import { Home } from '@/pages/Home/Home';
import { About } from '@/pages/About/About';
import { Teams } from '@/pages/Teams/Teams';
import { Contact } from '@/pages/Contact/Contact';
import { Community } from '@/pages/Community/Community';
import { NotFound } from '@/pages/NotFound/NotFound';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
