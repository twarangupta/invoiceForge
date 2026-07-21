const { Pool } = require("pg");
const config = require("../config/config")


const pool = new Pool({
    connectionString: config.databaseUrl
});
console.log(config.databaseUrl)

module.exports = pool
