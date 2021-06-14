const connection = require('../connection');

//create/add prdoduct => GET
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    });
};

//create/add prdoduct => POST
exports.postProcess = (req, res, next) => {
    const myDetail = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description
    }

    connection.query("INSERT into tbl_shop set ?", myDetail, function(err, result) {
        if (err) throw err;
        res.redirect('/admin');
    });
}

exports.getAdminProducts = (req, res, next) => {

    connection.query('SELECT * FROM tbl_shop', function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.render('admin/dashboard', {
            pageTitle: 'Dashboard',
            path: '/admin',
            db_rows_array: db_rows
        });
    });
};

exports.getEdit = (req, res, next) => {
    editId = req.params.id;
    console.log(editId);
    connection.query('SELECT * FROM tbl_shop WHERE id = ?', [editId], function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.render('admin/edit-product', {
            db_rows_array: db_rows,
            pageTitle: 'Edit Product',
            path: '/admin',
        });
    });
};

exports.postEdit = (req, res, next) => {
    editId = req.params.id;
    var title = req.body.txt1;
    var author = req.body.txt2;
    var price = req.body.txt3;
    var description = req.body.txt4;

    connection.query('UPDATE tbl_shop set title = ?, author = ?, price = ?, description = ? WHERE id = ?', [title, author, price, description, editId], function(err, db_rows) {
        if (err) throw err;
        res.redirect('/admin');
    });
};

exports.getDelete = (req, res, next) => {
    deleteId = req.params.id;
    connection.query('DELETE FROM tbl_shop WHERE id = ?', [deleteId], function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.redirect('/admin');
    });
}