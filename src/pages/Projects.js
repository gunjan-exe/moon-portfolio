import React from 'react'
import Navbar from "../Components/Navbar"
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import Work from '../Components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PROJECTS." text="Some of my most recent works"/>
      <Work />
      <Footer />
    </div>
  )
}

export default Projects
