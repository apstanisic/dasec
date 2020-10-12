import * as services from "../next/api/src/services";
import * as exceptions from "../next/api/src/exceptions";
import database from "../next/api/src/database";
import env from "../next/api/src/env";

export type EndpointContext = {
  services: typeof services;
  exceptions: typeof exceptions;
  env: typeof env;
  database: typeof database;
};
