const relation = (sequelize) => {
    const { role, user } = sequelize.models;

	role.hasMany(user);
	user.belongsTo(role);
}


module.exports = {relation}