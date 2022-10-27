module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("products", {
        name: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        }
    });
    return User;
}