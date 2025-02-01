import React, { useState, useRef } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    let [colour, setColour] = useState(true);
    let changeColour = () => {
        if (window.scrollY >= 100) {
            setColour(false);
        } else {
            setColour(true);
        }

    };

    window.addEventListener("scroll", changeColour);

    // https://youtu.be/0h2b4ftbZcU?si=17guQnQ35iD9JuWo

    return (
        <>
            <div className={colour ? "header" : "header header-bg"} >
                {/*  */}
                <Link to={"/"}>
                    Portfolio
                </Link>
                <ol className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to={"/"} >About Me </Link>
                    </li>
                    <li>
                        <Link to={"/projects"} >Projects </Link>
                    </li>
                    <li>
                        <Link to={"/skills"}> Skills </Link>
                    </li>
                    <li>
                        <Link to={"/blogs"} >Blogs </Link>
                    </li>
                    <li>
                        <Link to={"/contact"} >Contact </Link>
                    </li>
                </ol> 
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={"20"} style={{ color: "white" }} />) : (<FaBars size={"20"} style={{ color: "white" }} />)}

                </div>
            </div>

        </>
    )
}

export default Navbar
