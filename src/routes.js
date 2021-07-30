const express = require('express')
const BookController = require('./controllers/BookController')
const AuthorController = require('./controllers/AuthorController')

const routes = express.Router()

// Books
routes.get('/books', BookController.index)
routes.get('/books/:id', BookController.getByPk)
routes.post('/authors/:author_id/books', BookController.store)
routes.put('/books/:id', BookController.update)
routes.delete('/books/:id', BookController.delete)

// Authors
routes.get('/authors', AuthorController.index)
routes.get('/authors/:id', AuthorController.getByPk)
routes.post('/authors', AuthorController.store)
routes.put('/authors/:id', AuthorController.update)
routes.delete('/authors/:id', AuthorController.delete)

module.exports = routes