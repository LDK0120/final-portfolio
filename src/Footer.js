import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className="Footer">
            <div className="contact-links">
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="fa-xl" /></a>
                <a href="mailto:Laurakim120@gmail.com?subject=Reaching out from your portfolio"><FontAwesomeIcon icon={faEnvelope} className="fa-xl" /></a>
                <span><FontAwesomeIcon icon={faPhone} className="search-icon" /> 847) 791 7503</span>
            </div>
        </div>
    )
}