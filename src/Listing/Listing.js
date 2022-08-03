import React from 'react'
import { useNavigate } from "react-router-dom";
import './Listing.css';
import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import Title from 'Title';

function Listing() {

 const location = useLocation();
console.log(location.state[0].image);

  return (
  <div>
   <Title/>
  </div>
  )
}

export default Listing