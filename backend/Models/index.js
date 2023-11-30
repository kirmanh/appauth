const { Sequelize } = require("sequelize");

// Create a connection pool
const sequelize = new Sequelize({
  database: "authdb", // your database name
  username: "postgres", // your database username
  password: "potgres", // your database password
  host: "localhost",
  port: 5432, // your database port
  dialect: "postgres",
  pool: {
    max: 5, // maximum number of connection in pool
    min: 0, // minimum number of connection in pool
    acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000, // maximum time, in milliseconds, that a connection can be idle before being released
  },
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    // Close the connection pool
    await sequelize.close();
  }
}

// Uncomment the line below to test the connection
// testConnection();

module.exports = sequelize;
