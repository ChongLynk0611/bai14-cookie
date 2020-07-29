var express = require('express');
var router = express.Router();
var validate = require('../validate/user.validate');
var countCookie = require('../cookie/Count');
// shortid de sinh ngau nhien id cua sach

var controller = require('../controllers/user.contoller');
var db = require('../db');

router.get('/',countCookie.Count, controller.index);
router.get('/create' ,countCookie.Count, controller.create);
router.get('/edit/:id' ,countCookie.Count, controller.edit);
router.get('/delete/:id' ,countCookie.Count, controller.delete);
router.post('/create',countCookie.Count,validate.postCreate ,  controller.postCreate);
router.post('/edit/:id' ,countCookie.Count, controller.postEdit);

module.exports = router;