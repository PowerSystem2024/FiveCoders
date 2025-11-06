import {Pool} from 'pg';

export const pool = new Pool({
    port: 5432,
    host: 'localhost',
    user: 'postgres',
    password: '1231',
    database: 'pern'
});

pool.on('connect', () => {
    console.log('Conectado a la base de datos');
});