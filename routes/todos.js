var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')

router.get('/todos/new', todosCtrl.new);

module.exports = router;