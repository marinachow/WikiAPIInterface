import React, { useState } from 'react';
import './App.css'; // Ensure this is pointing to your updated CSS file
import Search from './Search';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchMade, setSearchMade] = useState(false); // State to track if a search has been made

  const handleSearch = (results) => {
    console.log('Search results:', results);
    setSearchResults(results);
    setSearchMade(true); // Update to indicate that a search has been made
  };

  return (
    <div>
      <nav style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 0', textAlign: 'center' }}>
        Wiki API
      </nav>
      {/* Only show the search component if a search hasn't been made */}
      {!searchMade && (
        <div className="search-container">
          <Search onSearch={handleSearch} />
        </div>
      )}
      {/* Results container with conditional rendering */}
      {searchMade && (
        <div className="search-results">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>
                  <h2>{result.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No search results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
