import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { useState } from 'react';
import JobSubmissionsListings from './Submissions/JobSubmissionsListings'
import Login from 'Login/Login';
import Form from './Submissions/Form'
import Listing from 'Listing/Listing';

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
<Route path='/submissionListing' element={<JobSubmissionsListings />} />
<Route path='/login' element={<Login />} />
<Route path='/submission' element={<Form featuredDetails= {false} />} />
<Route path='/submissionSilver' element={<Form featuredDetails= {true} />} />
<Route path='/submissionGold' element={<Form featuredDetails= {true} />} />
<Route path='/submissionPlatinum' element={<Form featuredDetails= {true} />} />
<Route path='/listing' element={<Listing />} />
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
