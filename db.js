const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Mit15ndy",
    host: "localhost",
    port: 5432,
    database: "tutora"
})

module.exports = pool