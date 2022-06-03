import React from 'react'
import Title from "../Title";
import './JobSubmissionListings.css';
import { useState } from 'react';

function JobSubmissionsListings() {



  return (
  <body>
  <Title/>
  <div className="container">
  <div className="card">
    <h1>Free Job Listing</h1>
    <p className="price">Free</p>
    <p>Some text about the contents of this listing</p>
    <p><button>Add to Cart</button></p>
  </div>
  <div className="card">
      <h1>Free Job Listing</h1>
      <p className="price">Free</p>
      <p>Some text about the contents of this listing</p>
      <p><button>Add to Cart</button></p>
    </div>
    </div>

     </body>
  )
}

export default JobSubmissionsListings