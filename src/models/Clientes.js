module.exports = (connection, sequelize) => {
    return connection.define("cliente",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: sequelize.STRING,
        direction: sequelize.STRING,
        cellphone: sequelize.STRING,
        email: sequelize.STRING,
        manager: sequelize.STRING

    });
;}