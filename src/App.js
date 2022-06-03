import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { useState } from 'react';
import JobSubmissionsListings from './Submissions/JobSubmissionsListings'

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
<Route path='/submissionListing' element={<JobSubmissionsListings />} />
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
