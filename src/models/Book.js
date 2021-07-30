const { Model, DataTypes } = require('sequelize')

class Book extends Model {
    static init(sequelize) {
        super.init({
            full_name: DataTypes.STRING,
            short_name: DataTypes.STRING,
            pages: DataTypes.INTEGER,
            synopsis: DataTypes.STRING,
            gender: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Author, { foreignKey: 'author_id', as: 'author' })
    }
}

module.exports = Book