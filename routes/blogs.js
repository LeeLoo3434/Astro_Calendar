var express = require('express');
var router = express.Router();
var blogsCtrl = require('../controllers/blogs')

/* GET users listing. */
router.get('/', blogsCtrl.index);
router.get('/new', blogsCtrl.new);
router.get('/:id', blogsCtrl.show);
router.post('/', blogsCtrl.create);
router.get('/:id/edit', blogsCtrl.edit);
router.delete('/:id', blogsCtrl.delete)
router.put('/:id', blogsCtrl.update)


module.exports = router;
