import knex from 'knex';
// import path from 'path';

const connection = knex({
    client: 'mysql',
    version: '5.7',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'password',
        database : 'ecoleta'
    },
});

export default connection;