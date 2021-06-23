module.exports = (connection, sequelize) => {
    return connection.define("laburantes", {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: sequelize.STRING,
        direction: sequelize.STRING,
        cellphone: sequelize.STRING,
        email: sequelize.STRING,
        seniority: sequelize.DATE,
        team_id: sequelize.INTEGER
    });
}