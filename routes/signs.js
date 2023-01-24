var express = require('express');
var router = express.Router();
var signsCtrl = require('../controllers/signs')

router.get('/signs', signsCtrl.index);

module.exports = router;