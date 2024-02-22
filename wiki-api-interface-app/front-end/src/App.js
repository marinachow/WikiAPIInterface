<<<<<<< Updated upstream
import React, { useState } from 'react';
import './App.css'; // Ensure this is pointing to your updated CSS file
import Search from './Search';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchMade, setSearchMade] = useState(false); // State to track if a search has been made
=======
import React, { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';
import 'animate.css/animate.min.css'; // The path might vary based on the version

// Sample hardcoded data
const sampleData = [
  {
    id: 1,
    title: "Introduction to React",
    link: "https://reactjs.org/docs/getting-started.html",
    date: "2020-01-01",
    wordcount: 500,
    snippet: "React makes it painless to create interactive UIs...",
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    link: "https://reactjs.org/docs/react-component.html",
    date: "2020-02-15",
    wordcount: 800,
    snippet: "Each component has several “lifecycle methods” that you can override...",
  },
  // Add more sample objects as needed
];

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterWordCount, setFilterWordCount] = useState('');
  const [sortBy, setSortBy] = useState('date'); // Assuming 'date' and 'wordcount' as sort options

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
    }
  }, [query]); // This effect acts whenever the query changes

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    if (!query.trim()) {
      setSearchResults([]);
      return; // Exit the function early
    }

    let results = sampleData.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filterDate) {
      results = results.filter(result => result.date >= filterDate);
    }

    if (filterWordCount) {
      results = results.filter(result => result.wordcount >= parseInt(filterWordCount, 10));
    }

    if (sortBy === 'date') {
      results.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'wordcount') {
      results.sort((a, b) => a.wordcount - b.wordcount);
    }
>>>>>>> Stashed changes

    setSearchResults(results);
<<<<<<< Updated upstream
    setSearchMade(true); // Update to indicate that a search has been made
=======
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
>>>>>>> Stashed changes
  };

  return (
    <div>
<<<<<<< Updated upstream
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
=======
      <nav style={{ backgroundColor: '#007bff', color: 'white', padding: '20px 0', textAlign: 'center', fontSize: '2rem' }}>
        Wiki API Search
      </nav>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Search the Wikipedia API for articles. Try "React" for example searches.</p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter search term..."
          />
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            placeholder="Filter by date"
          />
          <input
            type="number"
            value={filterWordCount}
            onChange={(e) => setFilterWordCount(e.target.value)}
            placeholder="Minimum word count"
          />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="date">Sort by Date</option>
            <option value="wordcount">Sort by Word Count</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="search-results animate__animated animate__fadeInDown">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id} className="result-item animate__animated animate__fadeInDown">
                <h2>
                  <a href={result.link} target="_blank" rel="noopener noreferrer">
                    {result.title}
                  </a>
                </h2>
                <p>Last Modified: {formatDate(result.date)}</p>
                <p>Word Count: {result.wordcount}</p>
                <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
                <p>
                  <a href={result.link} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                </p>
              </li>
            ))}
          </ul>
        ) : query && (
          <p>No search results found for "{query}".</p>
        )}
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default App;
