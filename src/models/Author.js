const { Model, DataTypes } = require('sequelize')

class Author extends Model {
    static init(sequelize) {
        super.init({
            full_name: DataTypes.STRING,
            birthday: DataTypes.STRING,
            gender: DataTypes.STRING,
            published_books: DataTypes.INTEGER,
            status: DataTypes.ENUM(['ACTIVE', 'DELETED'])
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Book, { foreignKey: 'id', as: 'book_id' })
    }
}

module.exports = Author