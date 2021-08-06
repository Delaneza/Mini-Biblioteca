const BookService = require('../service/BookService')
const bookService = new BookService()

module.exports = {

    async index(_, res, next) {
        const books = await bookService.getAll()

        res.json(books)

        next()
    },
    
    async getByPk(req, res, next) {
        const book = await bookService.getByPk(req.params.id)

        res.json(book)

        next()
    },

    
    async store(req, res, next) {

        const { full_name, short_name, pages, synopsis, gender, year, publishing_company, author_id, status } = req.body

        const book = await bookService.store({ 
            full_name, 
            short_name, 
            pages, 
            synopsis, 
            gender,
            year,
            publishing_company,
            author_id,
            status
        })

        res.status(200).json(book)

        next()
    },

    async update(req, res, next) {

        const { full_name, short_name, pages, synopsis, gender, year, publishing_company, author_id, status } = req.body

        await bookService.update({
            full_name, 
            short_name, 
            pages, 
            synopsis, 
            gender,
            year,
            publishing_company,
            author_id,
            status
            },
            {  id:req.params.id } 
        )
        
        res.status(200).json('Book updated!')
        
        next()
    },

    async delete(req, res, next) {
        
        await bookService.delete(
            { id: req.params.id }
        )
        
        res.status(200).json('Book deleted!')
        
        next()
    }

}