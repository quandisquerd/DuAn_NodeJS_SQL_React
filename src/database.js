import mysql from 'mysql'
import { Client }  from 'pg'
var connection = new Client({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 3001, // Cổng mặc định của PostgreSQL là 5432
    database: 'node_JS',

})
export default connection
// const client = new Client({
//     user: 'postgres',
//     password: 'admin',
//     host: 'localhost',
//     port: 3001, // Cổng mặc định của PostgreSQL là 5432
//     database: 'product_database',
// });