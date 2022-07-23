import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { useState } from 'react';
import JobSubmissionsListings from './Submissions/JobSubmissionsListings'
import Form from './Submissions/Form'

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
<Route path='/submissionListing' element={<JobSubmissionsListings />} />
<Route path='/silverjob' element={<Form />} />
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
