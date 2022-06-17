module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        comment:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: true, notEmpty: true}
        },
    });
    
    return Comments;
};