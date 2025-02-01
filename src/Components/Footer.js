import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="cta">
                <p>Let’s Create Something Together</p>
            </div>
            <div className="social-icons">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:youremail@gmail.com">
                    <FaEnvelope />
                </a>
                {/* Add more contact options if needed */}
            </div>
        </div>
    );
};

export default Footer;
