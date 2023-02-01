const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos')

router.post('/blogs/:id/todos', todosCtrl.create)

module.exports = router;