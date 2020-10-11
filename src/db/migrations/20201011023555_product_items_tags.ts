import * as Knex from "knex";
import { commonColumns } from "../common_columns";

const tableName = "ds_product_items_tags";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    commonColumns(knex, table);
    table.uuid("product_item_id").references("id").inTable("ds_product_items");
    table.uuid("product_tag_id").references("id").inTable("ds_product_tags");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
