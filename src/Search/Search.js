import { useState } from 'react';
import './Search.css';
import { FaSearch } from 'react-icons/fa';
const Search = () => {

  return (
  <div class="wrapper">
      <div class="searchBar">
      <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
      <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
      <FaSearch size={30}/>
      </button>
    </div>
  </div>
  );
}

export default Search;
