module.exports = (connection, sequelize) => {
    return connection.define("trabajadoresproyectos", {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        proyect_id: sequelize.INTEGER,
        trabajador_id: sequelize.INTEGER,
        assignmentdate: sequelize.DATE
    });
};