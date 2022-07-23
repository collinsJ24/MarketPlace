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
      <h1>Silver Job Listing</h1>
      <p className="price">$35</p>
      <p>Some text about the contents of this listing</p>
      <p><a className="button" href="silverjob">Add to Cart</a></p>
    </div>
    <div className="card">
          <h1>Gold Job Listing</h1>
          <p className="price">$95</p>
          <p>Some text about the contents of this listing</p>
          <p><button>Add to Cart</button></p>
        </div>
        <div className="card">
              <h1>Platinum Job Listing</h1>
              <p className="price">$135</p>
              <p>Some text about the contents of this listing</p>
              <p><button>Add to Cart</button></p>
            </div>
    </div>

     </body>
  )
}

export default JobSubmissionsListings