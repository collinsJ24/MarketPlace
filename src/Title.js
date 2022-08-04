import React, { useState, useEffect } from "react";
import './Title.css';
import { CgProfile } from 'react-icons/cg';

function Title(props) {

const [isMenuSet, setMenu] = useState(false);
const [isProfileDropdownSet, setProfileDropdown] = useState(false);
const [selectedOption, setSelectedOption] = useState("");
 const handleClick = event => {
    console.log("clicked");
    setMenu(!isMenuSet);

  };

   const handleLoginClick = event => {
      console.log("Profile dropdown clicked");
      setProfileDropdown(!isProfileDropdownSet);

    };

  return (
  <header>
   <nav className="navbar">
    <div className="nav-wrapper">
       <a href="/" className="logo">Marketplace</a>
       <ul className="menu">
         <li><a href="submissionListing">Post Submission</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#contact">Contact</a></li>
         <li onClick={handleLoginClick}>
         <a href="#login">
          <CgProfile size={30} />
          </a>
          {isProfileDropdownSet && (
          <div className="overlay-menu-login">
            <ul className="menu">
                          <li><a href="/login">Login</a></li>
                          <li><a href="#">Plugins</a></li>
                          <li><a href="#">Tutorials</a></li>
                      </ul>
                      </div>
                      )}
         </li>
       </ul>
     </div>
     </nav>
      <div className="banner-area" id="home">

      </div>

 <div className="menuParent">
      <div className="menuIcon" onClick={handleClick}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>
      </div>

 {isMenuSet && (
<div className="overlay-menu">
  <ul className="menu">
     <li><a href="submissionListing">Post Submission</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
    </ul>
</div>
)}
     </header>
  )
}

export default Title