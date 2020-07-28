var express  = require('express');
var router = express.Router();
var validate = require('../validate/transaction.validate');
var db = require('../db');
var controller = require('../controllers/transaction.controller');
router.get('/' ,controller.index);
router.get('/create',controller.create);
router.get('/:id/completed' , controller.completed);

router.post('/' ,validate.postIndex, controller.postIndex );

module.exports = router;
