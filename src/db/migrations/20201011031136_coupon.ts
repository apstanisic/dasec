import * as Knex from "knex";
import { commonColumns } from "../common_columns";

const tableName = "ds_coupons";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (t) => {
    commonColumns(knex, t);
    t.uuid("product_item_id")
      .references("id")
      .inTable("product_items")
      .nullable()
      .onDelete("SET_NULL");

    t.uuid("category_id")
      .references("id")
      .inTable("product_categories")
      .nullable()
      .onDelete("SET_NULL");

    t.string("name");
    t.text("description");
    t.string("value");

    t.integer("amount");
    t.boolean("in_percentage");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
