import { createConnection } from "typeorm";

export const createTestConn = async (resetDB: boolean = false) => {

  if (process.env.NODE_ENV == "test") {
    return createConnection({
      "type": "mysql",
      "host": "host",
      "port": 3306,
      "username": "username",
      "password": "password",
      "database": "freedom_test",
      "synchronize": resetDB,
      "logging": false,
      "dropSchema": resetDB,
      "entities": ["src/entity/**/*.ts"],
      "migrations": ["src/migration/**/*.ts"],
      "subscribers": ["src/subscriber/**/*.ts"],
      "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
      }
    });
  } else if (process.env.NODE_ENV == "developement") {
    return createConnection({
      "type": "mysql",
      "host": "host",
      "port": 3306,
      "username": "username",
      "password": "password",
      "database": "freedom",
      "synchronize": true,
      "logging": true,
      "entities": ["src/entity/**/*.ts"],
      "migrations": ["src/migration/**/*.ts"],
      "subscribers": ["src/subscriber/**/*.ts"],
      "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
      }
    });
  } else {
    return null
  }
};
