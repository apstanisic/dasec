import * as Knex from "knex";
import { commonColumns } from "../common_columns";

const tableName = "ds_product_item_images";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    // Product id
    commonColumns(knex, table);
    table
      .uuid("product_item_id")
      .references("id")
      .inTable("ds_product_items")
      .onDelete("CASCADE");
    // Directus Image id
    table
      .uuid("image_id")
      .references("id")
      .inTable("directus_files")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
