module.exports = (connection, sequelize) => {
    return connection.define("proyectosclientes", {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true  
        },
        proyect_id : sequelize.INTEGER,
        client_id: sequelize.INTEGER, 
        assignmentdate: sequelize.DATETIME
        
    });
};