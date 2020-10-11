import * as Knex from "knex";
import { commonColumns } from "../common_columns";

const tableName = "ds_order_items";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (t) => {
    commonColumns(knex, t);
    t.uuid("order_id").references("id").inTable("ds_orders");
    t.uuid("product_item_id").references("id").inTable("ds_product_items");
    t.integer("single_price");
    t.integer("quantity");
    t.integer("total_price");
    // This is in cash, not percentage. Percentage is calculated, and value is written here
    t.integer("discount");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
