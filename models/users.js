const {DataTypes} = require("sequelize");
const db = require("../config/database");

const Users = db.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Users;
