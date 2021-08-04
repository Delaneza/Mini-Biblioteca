const Book = require('../models/Book')
const sequelize = require('sequelize')
const { NotFoundException, BadRequestException } = require ('../config/errors')

class BookService {
    constructor(repository) {
      this.repository = repository
    }
  
    async getAll() {
        const books =  await Book.findAll({
            where: {
                status: {
                    [sequelize.Op.not]: 'DELETED' }
            }
        })
        return books
    }

    async getByPk(id) {
        const book = await Book.findByPk(id)
        
        if(!book) {
            throw new NotFoundException('Book not found!')
        }
        return book
    }

    
    async store({full_name, short_name, pages, synopsis, gender, year, publishing_company, author_id, status}) {

        if(!author_id || author_id === ""){
            await Book.create({ 
                full_name, 
                short_name, 
                pages, 
                synopsis, 
                gender,
                year,
                publishing_company,
                author_id: null,
                status
            })
            return 'BOOK CREATED, BUT THE AUTHOR_ID INFORMED IS NOT REGISTERED IN DATABASE, THIS VALUE HAS BEEN DEFINED AS NULL, WE ADVISE YOU TO REALIZE AN UPDATE LATER AND REFERENCE THE CORRECT AUTHOR'
        }
        
        const book = await Book.create({ 
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

        
        return book
    }

    async update({ full_name, short_name, pages, synopsis, gender, year, publishing_company, author_id, status }, { id }) {

        const book = await Book.findByPk(id)
       
        if(!book) {
            throw new BadRequestException ('Book does not exists!')
        }

        const updated = await Book.update({ 
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
        { where: { id }
    })
        return updated
    }

    async delete({ id }) {

        const book = await Book.findByPk(id)

        if(!book) {
            throw new NotFoundException ('Book not found!')
       }

        await Book.update({  
            status: "DELETED"
        },
            { where: { id }
        })
    }

}
  
module.exports = BookService 