const connection = require('../connection');

//Home page
exports.getIndex = (req, res, next) => {
    connection.query('SELECT * FROM tbl_shop', function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.render('shop/index', {
            db_rows_array: db_rows,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

//read Products ==> GET
exports.getProducts = (req, res, next) => {
    connection.query('SELECT * FROM tbl_shop', function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.render('shop/products', {
            db_rows_array: db_rows,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
};

//Read product deatils ==> get
exports.getProduct = (req, res, next) => {
    readId = req.params.id;
    console.log(readId);
    connection.query('SELECT * FROM tbl_shop WHERE id = ?', [readId], function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.render('shop/product-details', {
            db_rows_array: db_rows,
            pageTitle: 'Product-Details',
            path: "/products"
        });
    });
}

//checkout => GET
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};

//checkout ==> POST
exports.postCheckout = (req, res, next) => {

    const myData = {
        title: req.body.title,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        payment: req.body.payment
    }

    connection.query("INSERT into tbl_checkout set ?", myData, function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
};

//testimonials
exports.getTestimonials = (req, res, next) => {
    res.render('shop/testimonials', {
        pageTitle: 'Testimonials',
        path: '/testimonials'
    });
};

//about us
exports.getAbout = (req, res, next) => {
    res.render('shop/about', {
        pageTitle: 'About us',
        path: '/about'
    });
};

//terms
exports.getTerms = (req, res, next) => {
    res.render('shop/terms', {
        pageTitle: 'Terms',
        path: '/terms'
    });
};

//contact us ==> GET
exports.getContact = (req, res, next) => {
    res.render('shop/contact', {
        pageTitle: 'Contact us',
        path: '/contact'
    });
};

//contact us ==> POST
exports.postContact = (req, res, next) => {

    const myInfo = {
        name: req.body.name,
        email: req.body.email,
        msg: req.body.message,
    }

    connection.query("INSERT into tbl_contact set ?", myInfo, function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
};