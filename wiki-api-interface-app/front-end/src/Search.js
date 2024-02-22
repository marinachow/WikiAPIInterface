import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMinDate, setFilterMinDate] = useState('');
  const [filterMaxDate, setFilterMaxDate] = useState('');
  const [filterMinWordCount, setFilterMinWordCount] = useState('');
  const [filterMaxWordCount, setFilterMaxWordCount] = useState('');
  const [sortBy, setSortBy] = useState(''); // Default no sorting

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMinDateChange = (event) => {
    setFilterMinDate(event.target.value);
  };

  const handleMaxDateChange = (event) => {
    setFilterMaxDate(event.target.value);
  };

  const handleMinWordCountChange = (event) => {
    setFilterMinWordCount(event.target.value);
  };

  const handleMaxWordCountChange = (event) => {
    setFilterMaxWordCount(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/search?term=${searchTerm}&mindate=${filterMinDate}&maxdate=${filterMaxDate}&minwordcount=${filterMinWordCount}&maxwordcount=${filterMaxWordCount}&sortby=${sortBy}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };  

  return (
    <div>
      <p>Welcome to Wiki API interface! Our database is not fully populated yet, but you may search for any of the following these terms:</p>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Ruby</li>
        <li>Go</li>
        <li>Swift</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <label>
          Filter by date:
          <input
            type="date"
            value={filterMinDate}
            onChange={handleMinDateChange}
          />
          <input
            type="date"
            value={filterMaxDate}
            onChange={handleMaxDateChange}
          />
        </label>
        <label>
          Filter by word count:
          <input
            type="text"
            placeholder="Min word count"
            value={filterMinWordCount}
            onChange={handleMinWordCountChange}
          />
          <input
            type="text"
            placeholder="Max word count"
            value={filterMaxWordCount}
            onChange={handleMaxWordCountChange}
          />
        </label>
        <label>
          Sort by:
          <select value={sortBy} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="date">Date</option>
            <option value="wordcount">Word Count</option>
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
