import React, { useState, useEffect } from "react";
import './Title.css';

function Title(props) {

const [isMenuSet, setMenu] = useState(false);

 const handleClick = event => {
    console.log("clicked");
    setMenu(!isMenuSet);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
  <header>
   <nav className="navbar">
    <div className="nav-wrapper">
       <a href="/" className="logo">Marketplace</a>
       <ul className="menu">
         <li><a href="submissionListing">Post Submission</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="/login">Login</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>
     </div>
     </nav>
      <div className="banner-area" id="home"></div>

{isMenuSet && (
<div className="menuParent">
<div className="menuIcon" onClick={handleClick}>
  <span className="icon icon-bars"></span>
  <span className="icon icon-bars overlay"></span>
</div>
</div>
)}

 {isMenuSet && (
<div className="overlay-menu">
  <ul className="menu">
     <li><a href="submissionListing">Post Submission</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
    </ul>
</div>
)}
     </header>
  )
}

export default Title