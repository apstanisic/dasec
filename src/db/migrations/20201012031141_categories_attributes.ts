import * as Knex from "knex";
import { commonColumns } from "../common_columns";

export async function up(knex: Knex): Promise<void> {
  // Fields that category has that are searchable
  await knex.schema.createTable("ds_categories_attributes", (t) => {
    commonColumns(knex, t);
    t.uuid("category_id")
      .references("id")
      .inTable("ds_categories")
      .onDelete("CASCADE");
    t.uuid("attribute_id")
      .references("id")
      .inTable("ds_attributes")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {}
