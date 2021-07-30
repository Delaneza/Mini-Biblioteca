const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Book = require('../models/Book')
const Author = require('../models/Author')

const connection = new Sequelize(dbConfig)

Book.init(connection)
Author.init(connection)

Book.associate(connection.models)
Author.associate(connection.models)

module.exports = connection