import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


// Importez les composants
import Navbar from './components/Navbar/Navbar'; // Assurez-vous d'importer votre Navbar ici
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Hobbies from './components/Hobbies/Hobbies';
import Contactform from './components/ContactForm/Contactform';
import Footer from './components/Footer/Footer';
import AboutMe from './components/pages/aboutme'; // Assurez-vous que le chemin est correct
import MyProjects from './components/pages/myprojects'


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Assurez-vous que Navbar est inclus ici */}
      <Routes>
        <Route
          path="/"
          element={
            <main className='overflow-x-hidden'>
              <Navbar /> 
              <Hero />
              <Contact />
              <Skills />
              <Projects />
              <Hobbies />
              <Contactform />
              <Footer />
            </main>
          }
        />
        <Route path="/" element={<AboutMe />} />
        <Route path="/myprojects" element={<MyProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
