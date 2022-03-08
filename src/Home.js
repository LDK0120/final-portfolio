import React, { useState } from "react";
import "./Home.css";

export default function Home() {
    const [position, setPosition] = useState(0)

    function handleClick(newPosition) {
        // if(newPosition < 0) {
        //     newPosition = 0;
        // } else if (newPosition > 3) {
        //     newPosition = 3;
        // }

        //setPosition(newPosition)
    }

    return (
        <div className="Home">
            <div className="carousel">

        <div className="move-carousel-location" style={{ transform: `translateX(-${position * 100}%)` }}>
            <div className="carousel-item" style={ { width: "100%" }}>Item 1</div>
            <div className="carousel-item" style={ { width: "100%" }}>Item 2</div>
            <div className="carousel-item" style={ { width: "100%" }}>Item 3</div>
            <div className="carousel-item" style={ { width: "100%" }}>Item 4</div>
        </div>

        <div className="buttons">
            <button className="prev btn" onClick={handleClick(position - 1)}>prev</button>
            <button className="next btn" onClick={handleClick(position + 1)}>next</button>
        </div>

            </div>
        </div>
    )
}