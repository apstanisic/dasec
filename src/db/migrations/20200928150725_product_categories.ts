import * as Knex from "knex";
import { commonColumns } from "../common_columns";

const tableName = "ds_product_categories";

/** Product categories */
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    commonColumns(knex, table);
    table.string("name").notNullable();
    // parent category
    table
      .uuid("parent_id")
      .references("id")
      .inTable(tableName)
      .onDelete("SET NULL");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTableIfExists(tableName);
}
