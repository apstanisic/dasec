import * as Knex from "knex";
import { commonColumns } from "../common_columns";

const tableName = "ds_buyer_addresses";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    commonColumns(knex, table);
    table.string("address").notNullable();
    table.string("city").notNullable();
    table.string("postal_code").notNullable();
    table.string("country").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
