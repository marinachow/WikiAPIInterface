import React, { useState } from 'react';
import Search from './Search';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    console.log('Search results:', results);
    setSearchResults(results);
  };

  // Function to format the date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Extract the date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    // Construct the formatted date string
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <nav style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 0', textAlign: 'center' }}>
        Wiki API
      </nav>      
      <div className="search-container">
        <Search onSearch={handleSearch} />
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <h2>
                  <a href={result.link} target="_blank" rel="noopener noreferrer">
                    {result.title}
                  </a>
                </h2>
                {/* Format the date using formatDate function */}
                <p>Last Modified: {formatDate(result.date)}</p>
                <p>Word Count: {result.wordcount}</p>
                <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                <p>
                  <a href={result.link} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No search results found.</p>
        )}
      </div>
    </div>
  );
};

export default App;