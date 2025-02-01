import { FaFigma, FaHtml5, FaJava, FaPenFancy, FaReact } from "react-icons/fa";
import "./skills.css";
import React, { forwardRef } from 'react'
import Certifications from "./Certifications.js"
import { IoLogoCss3 } from "react-icons/io";
import Typewriter from "./Typewriter"

const Skills =()=>{
    return (
        <div className="skill-container">
            <Certifications />
             {/* <div className="content-right">
                <div className="content-box">
                <h1 >I am a<Typewriter text="..." delay={250} infinite /></h1>
                    <ul>
                        <li>
                            <div className="skill-content">
                                <h4>
                                    Front-end Web developer.
                                </h4>
                                <p>I create responsive and optimized web applications.</p>
                            </div>
                        </li>

                        <li><img></img>
                            <div className="skill-content">
                                <h4>
                                    Technical Writer, Content Writer
                                </h4>
                                <p>I create responsive and optimized web applications.</p>
                            </div>
                        </li>
                        <li>
                            <div className="skill-content">
                                <h4>
                                    Freelancer.
                                </h4>
                                <p>I create responsive and optimized web applications.</p>
                            </div>
                        </li>
                        <li><img></img>
                            <div className="skill-content">
                                <h4>
                                    Ui/UX Designer.
                                </h4>
                                <p>I create responsive and optimized web applications.</p>
                            </div>
                        </li>

                    </ul>
                </div> */}

            {/* </div> */}
            <div className="content-left">
                <h1>Skills</h1>
                <div className="skill-set">
                    <div className="skill-cards">
                        <FaHtml5 size={"70"} style={{ color: "white", marginLeft: "2rem", marginRight: "2rem" }} />
                        <h4>HTML</h4>
                    </div>
                    <div className="skill-cards">
                        <IoLogoCss3 size={"70"} style={{ color: "white", marginLeft: "2rem", marginRight: "2rem" }} />
                        <h4>CSS</h4>
                    </div>
                    <div className="skill-cards">
                        <FaReact size={"70"} style={{ color: "white", marginLeft: "2rem", marginRight: "2rem" }} />
                        <h4>ReactJS</h4>
                    </div>
                    <div className="skill-cards">
                        <FaJava size={"70"} style={{ color: "white", marginLeft: "2rem", marginRight: "2rem" }} />
                        <h4>Java</h4>
                    </div>

                    <div className="skill-cards">
                        <FaFigma size={"70"} style={{ color: "white", marginLeft: "2rem", marginRight: "2rem" }} />
                        <h4>Figma</h4>

                    </div>
                    <div className="skill-cards">
                        <FaPenFancy size={"55"} style={{ color: "white", marginLeft: "2rem", marginRight: "2rem" }} />
                        <h4>Content Writing</h4>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Skills;  
