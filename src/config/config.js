require("dotenv").config();

const requiredVariables = ["PORT", "DATABASE_URL"];

requiredVariables.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`${key} variable missing in env`);
  }
});

const config = {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
//   host: process.env.DB_HOST,
//   dbPort: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   dbUser: process.env.DB_USER,
//   dbPassword: process.env.DB_PASSWORD,
};

module.exports = config;
