import React from "react";
import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export default function Resume() {
    return (
        <div className="resume">
            <a href="./Kim_Laura_Resume.pdf" download className="pdf-download-link">
                Click to download <FontAwesomeIcon icon={faDownload} className="download-icon" />
            </a>
            <img src="./Kim_Laura_Resume1024_1-1.jpg" alt="resume" />
        </div>
    )
}