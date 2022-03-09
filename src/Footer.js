import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className="Footer">
            <div className="contact-links">
                <div className="link-items">
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="fa-lg" /></a>
                <a href="mailto:Laurakim120@gmail.com?subject=Reaching out from your portfolio"><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></a>
                <span><FontAwesomeIcon icon={faPhone} className="search-icon" /> 847) 791 7503</span>
                </div>
                <div className="git-hub-link">
                <p className="open-source"><a href="https://github.com/LDK0120/final-portfolio" target="_blank">open-source</a> coded by Laura Kim</p>
                </div>
            </div>
        </div>
    )
}