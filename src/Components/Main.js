import React from 'react'
import "./main.css"
import chaand from "../assets/intromoon.png"
import { Link } from 'react-router-dom'
import Typewriter from './Typewriter'
import StarParticles from './StarParticles'

const Main = () => {
    return (
        <div className='container'>
            
            <div className="moon-mask">
                <img className='chaand' src={chaand} alt='/'/>

            </div>
            <div className='content'>
                <h1>Hello World, I'm <Link to="https://www.linkedin.com/in/gunjan-sharma-697283211">Gunjan. </Link></h1>
                <p>
                I’m a code weaver and wordsmith, equally at home debugging complex web apps or crafting poetry that stirs the soul. I build digital experiences that don’t just function - they resonate. Whether it’s designing sleek, responsive websites, managing social media galaxies, or writing words that spark connection, <br/>I thrive at the intersection of logic and imagination. <br/> <br />Let’s create something extraordinary—one line of code or one story at a time.

                </p>
                <div className='button'>
                    <Link to="https://drive.google.com/file/d/1IbeKTKSCW8CrW4GFM0-GVyjl7oowoPRR/view"> Resume </Link>
                </div>

            </div>


        </div>

    )
}

export default Main
