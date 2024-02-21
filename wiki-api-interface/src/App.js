// App.js
import React from 'react';
import Search from './Search';

const App = () => {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div>
      <h1>Wiki API Interface</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default App;
