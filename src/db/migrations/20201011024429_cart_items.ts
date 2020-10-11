import * as Knex from "knex";
import { commonColumns } from "../common_columns";

const tableName = "ds_cart_items";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (t) => {
    commonColumns(knex, t);
    t.uuid("user_id")
      .references("id")
      .inTable("directus_users")
      .onDelete("CASCADE");
    t.uuid("product_item_id")
      .references("id")
      .inTable("ds_product_items")
      .onDelete("CASCADE");
    t.integer("quantity");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}
