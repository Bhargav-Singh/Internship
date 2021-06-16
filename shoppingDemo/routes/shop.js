var express = require('express');
var router = express.Router();
const path = require('path');
const connection = require('../connection');

const shopContoller = require('../controllers/shop');

router.get('/', shopContoller.getIndex);

router.get('/products', shopContoller.getProducts);

router.get('/products/:id', shopContoller.getProduct);

router.get('/testimonials', shopContoller.getTestimonials);

router.get('/about', shopContoller.getAbout);

router.get('/terms', shopContoller.getTerms);

router.get('/contact', shopContoller.getContact);

router.post('/contact', shopContoller.postContact);

router.get('/checkout', shopContoller.getCheckout);

router.post('/checkout', shopContoller.postCheckout);

module.exports = router;