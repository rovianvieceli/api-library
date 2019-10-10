const express = require('express');
const BookController = require('./Controllers/BookController');
const Routes = express.Router();

Routes.get('/books', BookController.index);
Routes.get('/books/:id', BookController.show);
Routes.post('/books', BookController.store);
Routes.put('/books/:id', BookController.update);
Routes.delete('/books/:id', BookController.destroy);

module.exports = Routes;