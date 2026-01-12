import React from 'react'
import About from './About'
import Header from './Header'
import Info from './Info'
import Experience from './Experiance'
import Projects from './Projects'
import Contact from './Contact'

const Homepage = () => {
  return (
    <>
      <section className=' h-full bg-black text-white '>

        <Header />
        <About />
        <Experience />
        <Projects />
        <Info />
        <Contact />
      </section>
    </>
  )
}

export default Homepage