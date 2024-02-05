// connection database
import dbConfig from "app/config/db";
import { Sequelize } from "sequelize";
import config from "app/config/db";

/**
 * Main function to connect database
 * @returns Squelize instance
 */
function getInstance() {
  console.log(dbConfig.get("db.database"));

  return new Sequelize(
    dbConfig.get("db.database"),
    dbConfig.get("db.user"),
    dbConfig.get("db.password"),
    {
      host: dbConfig.get("db.host"),
      port: dbConfig.get("db.port"),
      dialect: "postgres",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      logging: false,
    },
  );
}

const db = getInstance();

export default db;
