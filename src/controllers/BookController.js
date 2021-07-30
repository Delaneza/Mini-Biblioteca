const Book = require('../models/Book')
const Author = require('../models/Author')

module.exports = {

    async index(_, res, next) {
        const books = await Book.findAll()

        return res.json(books)

        next()
    },
    
    async getByPk(req, res, next) {
        const book = await Book.findByPk(req.params.id)

        if(!book) {
            return res.status(400).json({ error: 'Book not found' })
        }

        return res.json(book)

        next()
    },

    
    async store(req, res, next) {

        const { author_id } = req.params
        const { full_name, short_name, pages, synopsis, gender } = req.body

        const author = await Author.findByPk(author_id)

        if(!author) {
            return res.status(400).json({ error: 'Author not found' })
        }

        const book = await Book.create({ 
            full_name, 
            short_name, 
            pages, 
            synopsis, 
            gender,
            author_id
        })

        return res.status(200).json(book)

        next()
    },

    async update(req, res, next) {

        const { id } = req.params
        const { full_name, short_name, pages, synopsis, gender } = req.body

        if (!id) {
            res.status(400).json('Book not found')
        }

        await Book.update({ 
            full_name, 
            short_name, 
            pages, 
            synopsis, 
            gender 
        },
            { where: { id: req.params.id }
        })

        return res.status(200).json('Book Updated')
        
        next()
    },

    async delete(req, res, next) {

        await Book.destroy({ 
            where: { id: req.params.id }
        })

        return res.status(200).json('book Deleted')

        next()
    }

}