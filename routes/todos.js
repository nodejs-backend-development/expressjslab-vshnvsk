const express = require('express');
const {getTodos, postTodos} = require('../controllers/users.todos')

const router = express.Router();

const time = (req, res, next) => {
    const start = process.hrtime();

    res.on('finish', () => {
        const end = process.hrtime(start);
        console.log(`Request was completed ${end[0]} second ${end[1]} nanoseconds`)
    });
    next();
}

router.get('/:user_id', time, getTodos);

router.post('/:user_id/new', time, postTodos);

module.exports = router;
