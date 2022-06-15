module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        posts:{
            type: DataTypes.STRING,
            allowNull: false
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}