const sequelize = require("sequelize")

const db = new sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    dialect: "mysql"
})

db.sync({})

module.exports = db