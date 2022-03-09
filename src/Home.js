import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
            <div className="carousel">

        <div className="move-carousel-location" style={{ transform: `translateX(-${position * 100}%)` }}>
            <div className="carousel-item" style={ { width: "100%" }}>
                <div className="item-image item-image-one"></div>
                <div className="item-content item-content-one">contents</div>
            </div>
            <div className="carousel-item" style={ { width: "100%" }}>
                <div className="item-image item-image-two"></div>
                <div className="item-content item-content-two">contents</div>
            </div>
            <div className="carousel-item" style={ { width: "100%" }}>
                <div className="item-image item-image-three"></div>
                <div className="item-content item-content-three">contents</div>
            </div>
            <div className="carousel-item" style={ { width: "100%" }}>
                <div className="item-image item-image-four"></div>
                <div className="item-content item-content-four">contents</div>
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