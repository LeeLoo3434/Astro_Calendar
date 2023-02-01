const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos')

router.post('/blogs/:id/todos', todosCtrl.create)
router.delete('/todos/:id', todosCtrl.delete)

module.exports = router;