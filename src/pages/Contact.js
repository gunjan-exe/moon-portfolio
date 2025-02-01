// rafce +enter : generate container
import React from 'react'
import Navbar from "../Components/Navbar"
import Form from "../Components/Form"
import HeroImg from "../Components/HeroImg"
import StarParticles from '../Components/StarParticles'

const Contact = () => {
  return (
    <div>
      <Navbar /> 
      <StarParticles />
      <HeroImg heading="Let's Connect." text="Find me here for collaborations and feedback!"/>
      <StarParticles />
      <Form />
    </div>
  )
}

export default Contact
