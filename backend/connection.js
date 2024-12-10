// importamos Pool desde pg para conectarnos a la DB
const { Pool } = require("pg");
// creamos una instancia de Pool con los datos de la DB
const pool = new Pool({
    host: "localhost",
    port: "postgres",
    user: "postgres",
    password: "admi123",
    database: "likeme",
    allowExitOnIdle: true,
});

module.exports = { pool };