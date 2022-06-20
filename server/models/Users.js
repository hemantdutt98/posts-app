module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: true, notEmpty: true}
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: true, notEmpty: true}
        }
    });
    
    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: "cascade",
        });
    }
    
    return Users;
};