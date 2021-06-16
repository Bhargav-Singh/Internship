var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeDemo'
});

connection.connect(function(err) {
    if (!err) {
        console.log('Db connected!');
    } else {
        console.log('DB connection failed!');
    }
});

module.exports = connection;