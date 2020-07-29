var express = require('express');
var router = express.Router();
var controller = require('../controllers/home.controller');
var countCookie = require('../cookie/Count');
router.get('/',countCookie.Count,controller.index);

module.exports =router;