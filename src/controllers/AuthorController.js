const AuthorService = require('../service/AuthorService')
const authorService = new AuthorService()

module.exports = {

    async index(_, res, next) {
        const authors = await authorService.getAll()

        res.json(authors)

        next()
    },
    
    async getByPk(req, res, next) {
        const author = await authorService.getByPk(req.params.id)

        res.json(author)

        next()
    },

    
    async store(req, res, next) {
        
        const { full_name, birthday, gender, published_books, status } = req.body

        const author = await authorService.store({ 
            full_name, 
            birthday, 
            gender, 
            published_books,
            status
        })

        res.json(author)

        next()
    },

    async update(req, res, next) {

        const { full_name, birthday, gender, published_books, status } = req.body

        await authorService.update({ 
            full_name, 
            birthday, 
            gender, 
            published_books,
            status
            },
            { id: req.params.id }
        )

        res.status(200).json('Author updated!')
        
        next()
    },

    async delete(req, res, next) {

        await authorService.delete(
            { id: req.params.id }
        )
        
        res.status(200).json('Author deleted!')
        
        next()
    }

}