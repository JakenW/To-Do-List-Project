const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const router = express.Router();

const createTodoRoute = require('./routes/createTodoRoute');
const readTodoRoute = require('./routes/readTodoRoute');
const updateTodoRoute = require('./routes/updateTodoRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');

router.post('/login', require('./routes/loginRoute'));

router.post('/todos', isLoggedIn, createTodoRoute);
router.get('/todos', isLoggedIn, readTodoRoute);
router.put('/todos/:id', isLoggedIn, updateTodoRoute);
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);

module.exports = router;