// dbConnect.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '192.168.50.50',
    user: 'appuser',
    password: 'Password123',
    database: 'rp_games'
});

// Error handling of the connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;
