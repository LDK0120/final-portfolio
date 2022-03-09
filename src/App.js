import React from "react";
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import About from "./About";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


function App() {
  return (
    <div className="App">
      <div className="navbar">

        <ul>
          <li><h1>Laura Kim</h1></li>
          <li><p className="title">FRONT END DEVELOPER</p></li>
          <li><p>Connect with me at  
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="fa-lg" /></a>
                <a href="mailto:Laurakim120@gmail.com?subject=Reaching out from your portfolio"><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></a>
                <p><FontAwesomeIcon icon={faPhone} className="search-icon" /> 847) 791 7503</p>            
            </p></li>
        </ul>

        <div className="nav-list">
          <Link to="/" style={{textDecoration: 'none', marginLeft: '10px'}}>HOME</Link>
          <Link to="/resume" style={{textDecoration: 'none', marginLeft: '10px'}}>RESUME</Link>
          <Link to="/about" style={{textDecoration: 'none', marginLeft: '10px'}}>ABOUT</Link>
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
