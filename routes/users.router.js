var express = require('express');
var router = express.Router();
var validate = require('../validate/user.validate');
// shortid de sinh ngau nhien id cua sach

var controller = require('../controllers/user.contoller');
var db = require('../db');

router.get('/',controller.index);
router.get('/create' , controller.create);
router.get('/edit/:id' , controller.edit);
router.get('/delete/:id' , controller.delete);
router.post('/create',validate.postCreate ,  controller.postCreate);
router.post('/edit/:id' , controller.postEdit);

module.exports = router;