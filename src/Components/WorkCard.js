import React from 'react'
import "./workcard.css";
import pro1 from "../assets/eclipse.jpg"
import { Link, NavLink } from 'react-router-dom';

const WorkCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt='' />
            <h2 className='project-title'>
                {props.title}
            </h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink to={props.view} className="btn">View Project</NavLink>
                    <NavLink to={props.srcode} className="btn">Source Code </NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
