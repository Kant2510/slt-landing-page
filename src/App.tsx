import ParticlesBackground from './components/landing/ParticlesBackground';
import Navbar from './components/ui/Navbar';
import Hero from './components/landing/Hero';
import Vision from './components/landing/Vision';
import Features from './components/landing/Features';
import Products from './components/landing/Products';
import Applications from './components/landing/Applications';
import Contact from './components/landing/Contact';
import Footer from './components/ui/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Features />
        <Products />
        <Applications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
