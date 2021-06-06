const { query } = require('express');
var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeDemo'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('add-user');
});

router.post('/user-process', function(req, res, next) {

    const detail = {
        name: req.body.name,
        password: req.body.psw,
        address: req.body.add,
        sex: req.body.sex
    }

    connection.query("INSERT into tbl_users set ?", detail, function(err, result) {
        if (err) throw err;
        res.redirect('/users/show-users');
    });
});

router.get('/show-users', function(req, res, next) {
    connection.query('SELECT * FROM tbl_users', function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.render('accounts', { db_rows_array: db_rows });

    });
});

module.exports = router;