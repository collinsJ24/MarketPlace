import { useState } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Search = () => {

  return (
      <div class="searchBar">
      <input className="searchTerm" type="text" name="searchQueryInput" placeholder="Search" />
      <button className="searchButton" type="submit" name="searchQuerySubmit">
      <FontAwesomeIcon icon={ faSearch }/>
      </button>
  </div>
  );
}

export default Search;
