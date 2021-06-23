module.exports = (connection, sequelize) => {
    return connection.define("equipos", {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: sequelize.STRING,
        leader: sequelize.STRING,
        creation: sequelize.DATE
    });
;}