import React from 'react'
import Navbar from '././components/Navbar/Navbar'
import Hero from '././components/Hero/Hero'
import Contact from '././components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Hobbies  from './components/Hobbies/Hobbies'
import Contactform from './components/ContactForm/Contactform'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
    {/*   <Navbar /> */}
      <Hero />
      <Contact />
      <Skills />
      <Projects />
      <Hobbies />
      <Contactform />
      <Footer />
    </main>
  )
}

export default App