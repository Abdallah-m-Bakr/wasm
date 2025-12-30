import './i18n/i18n';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          {/* Container wrapper for all sections after Hero - centered regardless of text direction */}
          <div className="w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <About />
            <Services />
            <Gallery />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
