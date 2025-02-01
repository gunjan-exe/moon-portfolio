import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import './certifications.css';
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
    const skills = [
        { name: "HTML", level: "Experienced", stars: 5, icon: <FaHtml5 /> },
        { name: "CSS", level: "Experienced", stars: 5, icon: <FaCss3Alt /> },
        { name: "ReactJS", level: "Intermediate", stars: 4, icon: <FaReact /> },
        { name: "JavaScript", level: "Intermediate", stars: 4, icon: <FaJs /> },
        { name: "NodeJS", level: "Basic", stars: 3, icon: <FaNodeJs /> },
        { name: "SQL", level: "Intermediate", stars: 4, icon: <FaDatabase /> },
    ];

    const certifications = [
        { name: "Google Cybersecurity", provider: "Google Career Certificates", link: "https://www.coursera.org/account/accomplishments/professional-cert/QRNAFVWRBQTR" },
        { name: "Programming with JavaScript", provider: "Meta via Coursera", link: "https://www.coursera.org/account/accomplishments/verify/SJPYYYBEUKLJ" },
        { name: "Frontend Web Design", provider: "freeCodeCamp", link: "https://example.com" },
        { name: "Frontend Web Design", provider: "freeCodeCamp", link: "https://example.com" }
    ];

    return (
        <div className="skills-certifications-container">
            <div className="skills">
                <h2 className="section-title">Skills</h2>
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="certifications">
                <h2 className="section-title">Certifications</h2>
                <div className="certifications-list">
                    {certifications.map((cert, index) => (
                        <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-card">
                            <span className="cert-icon"><FaCertificate /></span>
                            <span className="cert-details">
                                <span className="cert-name">{cert.name}</span>
                                <span className="cert-provider"> - {cert.provider}</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
