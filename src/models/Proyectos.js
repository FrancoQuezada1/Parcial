module.exports = (connection, sequelize) => {
    return connection.define("proyectos", {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: sequelize.STRING,
        delivery_date: sequelize.DATETIME,
        budget: sequelize.STRING

    });
};