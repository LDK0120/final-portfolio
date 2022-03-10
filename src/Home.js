import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReact, faHtml5, faCss3, faJs, faBootstrap } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
    const [position, setPosition] = useState(0)
    let newPosition = 0;

    function handleClick(event) {
        let id = parseInt(event.target.id)
        newPosition = newPosition + id

        if (newPosition < 0) {
            newPosition = 0;
        } else if (newPosition > 3) {
            newPosition = 3;
        } 

        alert(newPosition)
        setPosition(newPosition)
    }

    return (
        <div className="Home">
            <div className="skills">
                <FontAwesomeIcon icon={faHtml5} className="fa-xl icon" /> 
                <FontAwesomeIcon icon={faCss3} className="fa-xl icon" />
                <FontAwesomeIcon icon={faJs} className="fa-xl icon" />
                <FontAwesomeIcon icon={faBootstrap} className="fa-xl icon" />
                <FontAwesomeIcon icon={faReact} className="fa-xl icon" />
                <FontAwesomeIcon icon={faGithub} className="fa-xl icon" />
            </div>
            <div className="carousel-title">My Projects</div>
            <div className="carousel">

        <div className="move-carousel-location" style={{ transform: `translateX(-${0 * 100}%)` }}>
            <div className="carousel-item" style={ { width: "100%" }}>
                <div className="item-image item-image-one"></div>
                <div className="item-content item-content-one">
                    <h1>Pacman</h1>
                    <div>
                    <a href="https://compassionate-beaver-5aa99e.netlify.app/" className="content-buttons" target="_blank" rel="noreferrer">Live Preview</a>
                    <a href="https://github.com/LDK0120/pacman" target="_blank" className="content-buttons" rel="noreferrer">View Code <FontAwesomeIcon icon={faGithub} className="fa-lg"/></a>
                    </div>
                    
                    <div>
                        <h2>Skills:</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>

                    <div className="description">
                        <h2>Description:</h2>
                        <p>Recreation of the Pacman game using HTML, CSS, and vanilla JavaScript.  
                            Highlights <em>DOM manipulation and use of conditional statement</em> skills.</p>
                    </div>
                </div>
            </div>
            <div className="carousel-item" style={ { width: "100%" }}>
                <div className="item-image item-image-two"></div>
                <div className="item-content item-content-two">
                    <h1>Hulu Press Website Clone</h1>
                    <div>
                    <a href="https://suspicious-mcnulty-ade48e.netlify.app/" className="content-buttons" target="_blank" rel="noreferrer">Live Preview</a>
                    <a href="https://github.com/LDK0120/react-clone" className="content-buttons" target="_blank" rel="noreferrer">View Code <FontAwesomeIcon icon={faGithub} className="fa-lg"/></a>
                    </div>
                    
                    <div>
                        <h2>Skills:</h2>
                        <ul>
                            <li>React</li>
                            <li>CSS</li>
                        </ul>
                    </div>

                    <div className="description">
                        <h2>Description:</h2>
                        <p><a href="https://press.hulu.com/news/" target="_blank" rel="noreferrer" className="hulu-link">Hulu Press website</a> clone using React.  Displays understanding of the fundamentals of React, such as <em>functional component, State, and Props</em>.  
                            With Hulu having no public API, images were pulled from their website to make a data set to mimic API response.</p>
                    </div>
                </div>
            </div>
            <div className="carousel-item" style={ { width: "100%" }}>
                <div className="item-image item-image-three"></div>
                <div className="item-content item-content-three">
                    <h1>Dictionary App</h1>
                    <div>
                    <a href="https://sleepy-shaw-17100e.netlify.app/" className="content-buttons" target="_blank" rel="noreferrer">Live Preview</a>
                    <a href="https://github.com/LDK0120/dictionary-app" className="content-buttons" target="_blank" rel="noreferrer">View Code <FontAwesomeIcon icon={faGithub} className="fa-lg"/></a>
                    </div>
                    
                    <div>
                        <h2>Skills:</h2>
                        <ul>
                            <li>React</li>
                            <li>CSS</li>
                            <li>API</li>
                        </ul>
                    </div>

                    <div className="description">
                        <h2>Description:</h2>
                        <p>React project using a dictionary API, React <em>State, react-router, and Context to update and share data between components</em>.  
                             LocalStorage is used to store, retrieve, and display previous data in the “My List” page.</p>
                    </div>
                </div>
            </div>
            <div className="carousel-item" style={ { width: "100%" }}>
                <div className="item-image item-image-four"></div>
                <div className="item-content item-content-four">
                    <h1>Weather App</h1>
                    <div>
                    <a href="https://inspiring-mestorf-1134b8.netlify.app/" className="content-buttons" target="_blank" rel="noreferrer">Live Preview</a>
                    <a href="https://github.com/LDK0120/weather-app-project" className="content-buttons" target="_blank" rel="noreferrer">View Code <FontAwesomeIcon icon={faGithub} className="fa-lg"/></a>
                    </div>
                    
                    <div>
                        <h2>Skills:</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>API</li>
                        </ul>
                    </div>

                    <div className="description">
                        <h2>Description:</h2>
                        <p>Use of HTML, CSS, vanilla JavaScript, and weather API to provide weather forecast.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="buttons">
            <button className="prev btn" id={-1} onClick={handleClick}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button className="next btn" id={1} onClick={handleClick}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>

            </div>
        </div>
    )
}