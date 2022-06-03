import React from 'react'
import './Title.css';
import { useState } from 'react';

function Title(props) {



  return (
  <body>
   <div className="navbar">
       <a href="#" class="logo">Marketplace</a>
       <ul class="nav">
         <li><a href="submissionListing">Post Submission</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>
     </div>
      <div class="banner-area" id="home"></div>

     </body>
  )
}

export default Title