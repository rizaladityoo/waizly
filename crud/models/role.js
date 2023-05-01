const { Sequelize } = require("sequelize");
const db = require("../config/db")

const role = db.define(
    "role",
    {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: Sequelize.STRING},
    },
    {
        freezeTableName: true,
    }
);

// role.hasMany(db.user, {
//     foreignKey: 'id_role',
//     as: 'role'
// })
// user.belongsTo(db.Role, {
//     foreignKey: 'id_role',
//     as: 'role'
// })
module.exports = role