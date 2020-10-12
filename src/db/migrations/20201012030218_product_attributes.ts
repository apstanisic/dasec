import * as Knex from "knex";
import { commonColumns } from "../common_columns";

const tableName = "ds_product_attributes";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (t) => {
    commonColumns(knex, t);
    // size
    t.string("name");
    // Size
    t.string("readable_name");
    t.string("type");
    // Array of possible values
    t.json("possible_values").nullable();
    t.boolean("any_value").defaultTo(true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
