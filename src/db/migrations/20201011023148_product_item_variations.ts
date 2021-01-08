import * as Knex from 'knex';
import { commonColumns } from '../common_columns';

const tableName = 'ds_product_item_variations';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    commonColumns(knex, table);
    // Variation type, eg size, color
    table.string('type');
    // Variation value, eg xl, m
    table.string('value');
    table.integer('price_change');
    table.string('description');
    table.uuid('image_id').references('id').inTable('directus_files');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
