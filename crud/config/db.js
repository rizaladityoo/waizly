const { Sequelize } = require("sequelize")
// const { relation } = require("../models/relation")

const db = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    dialect: "mysql"
})

// const modelDefiners = [
// 	require('../models/role'),
// 	require('../models/user'),
// ];

// We define all models according to their files.
// for (const modelDefiner of modelDefiners) {
// 	modelDefiner(db);
// }

// relation(db)

db.sync({})

module.exports = db