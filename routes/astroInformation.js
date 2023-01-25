var express = require('express');
var router = express.Router();


router.get('/astroInformation', function(req, res) {
    res.render('astroInformation/index')
})

module.exports = router;