import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'
import Certifications from '../Components/Certifications'


const SkillSet = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="SKILLS & CERTIFICATIONS" text="blablablablabla"/>
      <Certifications />
      <Footer />
    </div>
  )
}

export default SkillSet
