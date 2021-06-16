var express = require('express');
var router = express.Router();
const path = require('path');
const connection = require('../connection');

const adminController = require('../controllers/admin');

// /admin/products => GET
router.get('/', adminController.getAdminProducts);

// admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// admin/product-process => POST
router.post('/product-process', adminController.postProcess);


//admin/update route get
router.get('/edit/:id', adminController.getEdit);

//Update Route Post
router.post('/edit/:id', adminController.postEdit);

//delete route
router.get('/delete/:id', adminController.getDelete);


module.exports = router;