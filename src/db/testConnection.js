const pool = require("./pool");

async function testConnection() {
  const res = await pool.query("SELECT NOW()");
  console.log(res.rows);
  await pool.end();
}

testConnection()