import React from 'react'
import Title from "../Title";
import './JobSubmissionListings.css';
import { useState } from 'react';

function JobSubmissionsListings() {



  return (
  <body>
  <Title/>
   <div className="sidebar-container">
    <div className="widget">
    <div class="job-buttons">
    	<a href="/post-a-job-opening/"><img src="https://www.ranchwork.com/wp-content/uploads/Post-a-Job.png" alt="Post a Job" width="205" height="205"/></a>
    	<a href="/edit-remove/"><img src="https://www.ranchwork.com/wp-content/uploads/Edit-or-Remove-a-Job.png" alt="Edit or Remove a Job" width="300" height="89"/></a>
    	<a href="/post-a-job-wanted/"><img src="https://www.ranchwork.com/wp-content/uploads/Post-a-Job-Wanted.png" alt="Post a Job Wanted" width="124" height="124"/></a>
    </div>
    </div>
    </div>
  <div className="container">
  <div className="card">
    <h1>Free</h1>
    <p className="price">Free</p>
    <p>Some text about the contents of this listing</p>
    <p><a className="button" href="submission">Add to Cart</a></p>
  </div>
  <div className="card">
      <h1>Silver</h1>
      <p className="price">$35</p>
      <p>Some text about the contents of this listing</p>
      <p><a className="button" href="submissionSilver">Add to Cart</a></p>
    </div>
    <div className="card">
          <h1>Gold</h1>
          <p className="price">$95</p>
          <p>Some text about the contents of this listing</p>
         <p><a className="button" href="submissionGold">Add to Cart</a></p>
        </div>
        <div className="card">
              <h1>Platinum</h1>
              <p className="price">$135</p>
              <p>Some text about the contents of this listing</p>
              <p><a className="button" href="submissionPlatinum">Add to Cart</a></p>
            </div>
    </div>

     </body>
  )
}

export default JobSubmissionsListings