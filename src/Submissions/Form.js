import React from 'react'
import './Form.css';
import { useState } from 'react';
import Title from "../Title";

function Form(props) {

const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

console.log(props.featuredDetails);
 let sendSubmission = async (e) => {
    e.preventDefault();
    try {
    console.log("sendign request");
      let res = await fetch("http://localhost:8080/gallery/submission", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
          title: title,
          email: email,
          phone: phone,
          url: url,
          description: description
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setTitle("");
        setEmail("");
        setUrl("");
      } else {
        setUrl("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
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
      <label id="name-label" htmlFor="title"><h3>Job Title</h3></label>
      <input id="name" type="text" name="title" required  onChange={(e) => setTitle(e.target.value)}/>
      <br/>
      <label id="email-label" htmlFor="phone"><h3>Phone</h3></label>
      <input id="email" type="number" name="phone" required onChange={(e) => setPhone(e.target.value)}/>
      <br/>
      <label id="number-label" htmlFor="url"><h3>Website</h3></label>
      <input id="number" type="text" name="url" onChange={(e) => setUrl(e.target.value)}/>

      <br/>

      <label htmlFor="description"><h3>Job Description</h3></label>
      <textarea id="description" name="description" rows="6" cols="50" onChange={(e) => setDescription(e.target.value)} ></textarea>
      <br/>
      <p id="submission">
      <input onClick={sendSubmission} id="submit" type="submit" value="Submit"/>
      </p>
    </form>
  </div>
  </div>
  <div className="col-3 col-s-3 space"></div>
  </div>
  )
}

export default Form