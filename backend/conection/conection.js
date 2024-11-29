//configura y exporta un pool de conexiones a una base de datos PostgreSQL, 
//utilizando variables de entorno para la configuración y biblioteca pg
require('dotenv').config();
const { Pool } = require('pg'); //importa la clase Pool de la biblioteca pg

const  FRONTEND_URL  = process.env.FRONTEND_URL || "http://localhost:5173/";
const {  DATABASE_URL, DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT} = process.env;  //extrae las variables de entorno necesarias para la conexión a la base de datos del archivo .env


const pool = new Pool({   //configuración de la conexión, se crea una instancia de Pool con la configuración necesaria para conectarse a la base de datos PostgreSQL.
    connectionString: DATABASE_URL || undefined, // Usa DATABASE_URL si está definido
    host: DATABASE_URL ? undefined : DB_HOST, // Si DATABASE_URL no está definido, usa DB_HOST
    database: DATABASE_URL ? undefined : DB_DATABASE, // Si DATABASE_URL no está definido, usa DB_DATABASE
    user: DATABASE_URL ? undefined : DB_USER, // Si DATABASE_URL no está definido, usa DB_USER
    password: DATABASE_URL ? undefined : DB_PASSWORD, // Si DATABASE_URL no está definido, usa DB_PASSWORD
    port: DATABASE_URL ? undefined : DB_PORT, // Si DATABASE_URL no está definido, usa DB_PORT
    allowExitOnIdle: true, // Permite que la aplicación se cierre incluso si hay conexiones inactivas en el pool.
});


module.exports = { pool, FRONTEND_URL };