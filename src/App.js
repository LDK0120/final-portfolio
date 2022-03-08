import React from "react";
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="navbar">

        <ul>
          <li><h1>Laura Kim</h1></li>
          <li><p>FRONT END DEVELOPER</p></li>
          <li><p>Contact me at * * *</p></li>
        </ul>

        <div className="nav-list">
          <Link to="/">HOME</Link>
          <Link to="/resume">RESUME</Link>
          <Link to="/about">ABOUT</Link>
        </div>
      </div>

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />      
            <Route path="/resume" element={<Resume />} />          
            <Route path="/About" element={<About />} />              
          </Routes>
        </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
