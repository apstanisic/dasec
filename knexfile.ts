// Update with your config settings.
import { config } from "dotenv";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./src/consts";

const env = config({ path: ".env" }).parsed ?? {};

const basicConfig = {
  client: "postgres",
  connection: {
    database: env[DB_DATABASE],
    user: env[DB_USER],
    password: env[DB_PASSWORD],
    host: env[DB_HOST],
    port: env[DB_PORT],
  },
  migrations: {
    directory: "./src/db/migrations",
  },
  seeds: {
    directory: "./src/db/seeds",
  },
};

module.exports = {
  development: basicConfig,
  production: basicConfig,
};
