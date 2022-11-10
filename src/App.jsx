import React, { useEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import 'animate.css';
import WOW from 'wowjs';


const App = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

    </>
  )
}

export default App