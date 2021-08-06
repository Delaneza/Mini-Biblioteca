const Author = require('../models/Author')
const sequelize = require('sequelize')
const { NotFoundException, BadRequestException } = require ('../config/errors')

class AuthorService {
    constructor(repository) {
      this.repository = repository
    }
  
    async getAll() {
        const authors =  await Author.findAll({
            where: {
                status: {
                    [sequelize.Op.not]: 'DELETED' }
            }
        })
        
        return authors
    }

    async getByPk(id) {
        const author = await Author.findByPk(id)
        
        if(!author) {
            throw new NotFoundException ('Author not found!')
        }

        return author
    }

    
    async store({full_name, birthday, gender, published_books, status}) {

        const author = await Author.create({ 
            full_name, 
            birthday, 
            gender, 
            published_books,
            status
        })
        return author
    }

    async update({ full_name, birthday, gender, published_books, status }, { id }) {

        const author = await Author.findByPk(id)

        if(!author) {
            throw new BadRequestException ('Author does not exists!')
       }

        const updated = await Author.update({ 
            full_name, 
            birthday, 
            gender, 
            published_books,
            status
        },
            { where: { id }
    })
        return updated
    }

    async delete({ id }) {

        const author = await Author.findByPk(id)

        if(!author) {
            throw new NotFoundException ('Author not found!')
        }

        await Author.update({  
            status: "DELETED"
        },
            { where: { id }
        })
    }

}
  
module.exports = AuthorService 