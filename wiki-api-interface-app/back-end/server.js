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

// Define API endpoint for search
app.get('/search', (req, res) => {
  const searchTerm = req.query.term;

  // Query database for search results
  pool.query(
    'SELECT * FROM SearchResults WHERE title LIKE ?',
    [`%${searchTerm}%`],
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
