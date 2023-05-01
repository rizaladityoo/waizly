const { DataTypes} = require('sequelize');
const db = require("../config/db")

const user = db.define(
    'user',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING},
        roleId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'role',
              key: 'id'
            }
        }
    },
    {
        freezeTableName: true,
    }
);

// user.belongsTo(db.role, {
//     foreignKey: 'roleId',
//     as: 'role'
// })

// role.hasMany(db.User, {
//     foreignKey: 'id_role',
//     as: 'role'
// })
module.exports = user