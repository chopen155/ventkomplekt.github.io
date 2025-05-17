import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import ProjectsSection from './components/ProjectsSection';
import AboutContactSection from './components/AboutContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set primary color in CSS variables
    document.documentElement.style.setProperty('--color-primary', '#0891b2'); // Cyan-600
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ProductsSection />
        <ProjectsSection />
        <AboutContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
