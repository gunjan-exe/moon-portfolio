import { FaLinkedin } from "react-icons/fa";
import "./form.css";
import React from 'react'
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";

const Form = () => {
  return (
    <div className="form">
      <div className="">
        <Link ><FaLinkedin size="20" />
        </Link>
        <Link><SiGmail /> </Link>
      </div>
      <form action="https://formsubmit.co/el/wilile">

        <label for="name">Enter you name:</label>
        <input type="text" id="name" autocomplete="off" required="" ></input>
        <label for="email">Enter you Email:</label>
        <input type="email" id="email" autocomplete="off" required="" />
        <label for="message">Write your message:</label>
        <textarea rows="6" placeholder="Type your message here" name="message" id="message" required=""></textarea>
        <button className="btn" type="submit">Send Message</button>
        {/* <span> *do not share sensitive information via messaging</span> */}
      </form>


    </div>
  )
}

export default Form
