var mysql = require('mysql2');
const express = require('express');

const app = express();

// connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, // default MySQL port
    user: 'root',
    password: '123456789',
    database: 'mysql'
});

// connect to database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
        return;
    }
    console.log('Connected to database');

    // Example usage
    app.get('/api/rows', (req, res) => {
        const sql2 = 'SELECT * FROM Customer';
        connection.query(sql2, (err, result) => {
          if (err) {
            throw err;
          }
          res.json(result);
        });
      });

});

// close connection on process exit
process.on('exit', () => {
    connection.end();
});