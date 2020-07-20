var express  = require('express');
var router = express.Router();

var db = require('../db');
var controller = require('../controllers/transaction.controller');
router.get('/' ,controller.index);
router.get('/create',controller.create);
router.get('/:id/completed' , controller.completed);

router.post('/' ,controller.postIndex );

module.exports = router;
