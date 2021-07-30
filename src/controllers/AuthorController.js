const Author = require('../models/Author')

module.exports = {
    async index(_, res, next) {
        const authors = await Author.findAll()

        return res.json(authors)

        next()
    },
    
    async getByPk(req, res, next) {
        const author = await Author.findByPk(req.params.id)

        if(!author) {
            return res.status(400).json({ error: 'Author not found' })
        }

        return res.json(author)

        next()
    },

    
    async store(req, res, next) {
        const { full_name, birthday, gender, published_books } = req.body

        const author = await Author.create({ 
            full_name, 
            birthday, 
            gender, 
            published_books 
        })

        return res.json(author)

        next()
    },

    async update(req, res, next) {
        
        const { id } = req.params
        const { full_name, birthday, gender, published_books } = req.body

        if (!id) {
            res.status(400).json('Author not found')
        }

        await Author.update({ 
            full_name, 
            birthday, 
            gender, 
            published_books
        },
            { where: { id: req.params.id }
        })

        return res.status(200).json('Author Updated')
        
        next()
    },

    async delete(req, res, next) {

        await Author.destroy({ 
            where: { id: req.params.id }
        })

        return res.status(200).json('Author Deleted')

        next()
    }

}