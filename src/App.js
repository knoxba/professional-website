import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';

// Projects section removed - now integrated into Hero component
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Features from './components/Features';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />

      {/* Projects section removed - now integrated into Hero component */}
      <Contact />
      <Footer />
      {/* <Features /> */}
    </div>
  );
}

export default App;