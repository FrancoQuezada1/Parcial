module.exports = (connection, sequelize) => {
    const Clientes = require("./Clientes");
    const Proyectos = require("./Proyectos");
    const ProyectosClientes = require("./Proyectoscliente");
    const Teams = require("./Teams");
    const Trabajadores = require("./Trabajadores");
    const Trabajadoresproyectos = require("./Trabajadorproyectos");

    const ClientesModel = Clientes(connection, sequelize);
    const ProyectosModel = Proyectos(connection, sequelize);
    const ProyectosClientes = ProyectosClientes(connection, sequelize);
    const TeamsModel = Teams(connection, sequelize);
    const TrabajadoresModel = Trabajadores(connection, sequelize);
    const TrabajadoresproyectosModel = Trabajadoresproyectos(connection, sequelize); 

    return {
        Clientes: ClientesModel,
        Proyectos: ProyectosModel,
        ProyectosClientes: ProyectosClientesModel,
        Teams: TeamsModel,
        Trabajadores: TrabajadoresModel,
        Trabajadoresproyectos: TrabajadoresproyectosModel
    }
}