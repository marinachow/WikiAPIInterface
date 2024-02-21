import React, { useState } from 'react';
import Search from './Search';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    console.log('Search results:', results);
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Wiki API Interface</h1>
      <Search onSearch={handleSearch} />
      <div>
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
    </div>
  );
};

export default App;
