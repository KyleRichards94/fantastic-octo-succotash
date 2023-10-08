// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const favoritePosts = sequelize.define('favoritePosts', {
        favoriteId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        postId: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        favoriteDate: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        tableName: 'favoritePosts',
        timestamps: false
    });
    // Define the foreign keys for the associations with the 'users' and 'posts' tables
    favoritePosts.associate = (models) => {
        favoritePosts.belongsTo(models.users, { foreignKey: 'userId', onDelete: 'CASCADE' });
        favoritePosts.belongsTo(models.posts, { foreignKey: 'postId', onDelete: 'CASCADE' });
    };
    return favoritePosts;
};
