const { Sequelize } = require("sequelize");
const db = require("../config/db")
const bcrypt = require("bcrypt");
const User = db.define(
    "user",
    {
        username: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        password: {type: Sequelize.STRING}
    },
    {
        freezeTableName: true,
        // instanceMethods: {
        //     generateHash(password) {
        //         return bcrypt.hash(password, bcrypt.genSaltSync(8));
        //     },
        //     validPassword(password) {
        //         return bcrypt.compare(password, this.password);
        //     }
        // }
    }
);

module.exports = User;