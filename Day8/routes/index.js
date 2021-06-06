const { enabled } = require('debug');
var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeDemo'
});

connection.connect(function(err) {
    if (!err) {
        console.log('DB connected!')
    } else {
        console.log(err);
    }
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
    res.render('add-form');
});

router.post('/form-process', function(req, res, next) {

    const myData = {
        name: req.body.txt1,
        details: req.body.txt2,
        price: req.body.txt3
    }

    connection.query("INSERT into tbl_product set ?", myData, function(err, result) {
        if (err) throw err;
        res.redirect('/display');
    });
});

router.get('/display', function(req, res, next) {

    connection.query('SELECT * FROM tbl_product', function(err, db_rows) {

        if (err) throw err;
        console.log(db_rows);
        res.render('display', { db_rows_array: db_rows });
    });
});


router.get('/student', function(req, res, next) {
    res.render('add-student');
});

router.post('/student-process', function(req, res, next) {

    const myInfo = {
        name: req.body.txt1,
        email: req.body.txt2,
        age: req.body.txt3,
        marks: req.body.txt4,
        branch: req.body.txt5,
    }

    connection.query("INSERT into tbl_student set ?", myInfo, function(err, result) {
        if (err) throw err;
        res.redirect('/show');
    });
});

router.get('/show', function(req, res, next) {

    connection.query('SELECT * FROM tbl_student', function(err, db_rows) {

        if (err) throw err;
        console.log(db_rows);
        res.render('show', { db_rows_array: db_rows });

    });
});
module.exports = router;