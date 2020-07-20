
var express = require("express");
var router = express.Router();

// shortid de sinh ngau nhien id cua sach
const shortid = require('shortid');

var controller = require('../controllers/books.controller');
var db = require('../db');
 // cac get
router.get('/' ,controller.index );
router.get('/create',controller.create);
router.get('/delete/:id' , controller.delete);
router.get('/edit/:id',controller.edit);
// cac post
router.post('/create',controller.postCreate);
router.post('/edit/:id',controller.postEdit);

module.exports = router;