const express = require('express');
const {getTodos, postTodos} = require('../controllers/users.todos')

const router = express.Router();

router.get('/:id', getTodos);

router.post('/:id/new', postTodos);

module.exports = router;
