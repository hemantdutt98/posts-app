module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: true, notEmpty: true}
        },
        posts:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: true, notEmpty: true}
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: true, notEmpty: true}
        }
    });
    
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade",
        });
    }
    
    return Posts;
};