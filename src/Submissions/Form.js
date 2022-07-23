import React from 'react'
import './Form.css';
import { useState } from 'react';
import Title from "../Title";

function Form() {



  return (
  <div>
  <Title/>
  <div id="header-container" className="col-12 col-s-12">
    <div className="col-4 col-s-4 space"></div>
    <div id="header" className="col-4 col-s-4">
      <h1 id="title">Job Listing Form</h1>
    </div>
    <div className="col-4 col-s-4 space"></div>
  </div>
  <div className="col-3 col-s-3 space"></div>
  <div id="form-container" className="col-6 col-s-6">
   <div className="border" >
    <form id="survey-form">
      <label id="name-label" for="title"><h3>Job Title</h3></label>
      <input id="name" type="text" name="title" required/>
      <br/>
      <label id="email-label" for="phone"><h3>Phone</h3></label>
      <input id="email" type="number" name="phone" required/>
      <br/>
      <label id="number-label" for="age"><h3>Website</h3></label>
      <input id="number" type="text" name="age" />

      <br/>

      <label for="description"><h3>Job Description</h3></label>
      <textarea id="description" name="description" rows="6" cols="50" ></textarea>
      <br/>
      <p id="submission">
      <input id="submit" type="submit" value="Submit"/>
      </p>
    </form>
  </div>
  </div>
  <div class="col-3 col-s-3 space"></div>
  </div>
  )
}

export default Form