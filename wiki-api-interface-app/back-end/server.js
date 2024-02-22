const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());

// Create MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'wiki_db'
});

// API endpoint for search
app.get('/search', (req, res) => {
    const searchTerm = req.query.term;
    const minDate = req.query.mindate;
    const maxDate = req.query.maxdate;
    const minWordCount = req.query.minwordcount;
    const maxWordCount = req.query.maxwordcount;
    const sortBy = req.query.sortby;
  
    // Construct the SQL query based on filters and sorting
    let sqlQuery = 'SELECT * FROM SearchResults WHERE title LIKE ?';
    let sqlParams = [`%${searchTerm}%`];
  
    if (minDate && maxDate) {
      sqlQuery += ' AND date BETWEEN ? AND ?';
      sqlParams.push(minDate, maxDate);
    } else if (minDate) {
      sqlQuery += ' AND date >= ?';
      sqlParams.push(minDate);
    } else if (maxDate) {
      sqlQuery += ' AND date <= ?';
      sqlParams.push(maxDate);
    }
  
    if (minWordCount && maxWordCount) {
      sqlQuery += ' AND wordcount BETWEEN ? AND ?';
      sqlParams.push(minWordCount, maxWordCount);
    } else if (minWordCount) {
      sqlQuery += ' AND wordcount >= ?';
      sqlParams.push(minWordCount);
    } else if (maxWordCount) {
      sqlQuery += ' AND wordcount <= ?';
      sqlParams.push(maxWordCount);
    }
  
    if (sortBy === 'alphabetical') {
      sqlQuery += ' ORDER BY title';
    } else if (sortBy === 'date') {
      sqlQuery += ' ORDER BY date';
    } else if (sortBy === 'wordcount') {
      sqlQuery += ' ORDER BY wordcount';
    }
  
    // Query database for search results
    pool.query(
      sqlQuery,
      sqlParams,
      (error, results) => {
        if (error) {
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
        res.json(results);
      }
    );
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
