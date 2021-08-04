const BookController = require('./controllers/BookController')
const AuthorController = require('./controllers/AuthorController')

const router = require('express').Router()

// Books
router.get('/books', BookController.index)
router.get('/books/:id', BookController.getByPk)
router.post('/books', BookController.store)
router.put('/books/:id', BookController.update)
router.delete('/books/:id', BookController.delete)

// Authors
router.get('/authors', AuthorController.index)
router.get('/authors/:id', AuthorController.getByPk)
router.post('/authors', AuthorController.store)
router.put('/authors/:id', AuthorController.update)
router.delete('/authors/:id', AuthorController.delete)

module.exports = router