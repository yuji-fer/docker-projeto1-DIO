const Sequelize = require('sequelize');
const database = require('../Infrastructure/db');

const Todo = database.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

module.exports = Todo;