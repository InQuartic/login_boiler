import { createConnection } from "typeorm";

export const createTypeormConn = async () => {
  if (process.env.NODE_ENV == "test") {
    return createConnection({
      "type": "mysql",
      "host": "host",
      "port": 3306,
      "username": "username",
      "password": "password",
      "database": "freedom_test",
      "synchronize": true,
      "logging": false,
      "dropSchema": true,
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
