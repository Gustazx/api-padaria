const knex = require('knex');

const knexConfig = knex({
    client: 'pg', 
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '12345678', 
        database: 'padaria'   
    }
});

module.exports = knexConfig;
