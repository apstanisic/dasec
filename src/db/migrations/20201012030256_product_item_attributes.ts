import * as Knex from 'knex';
import { commonColumns } from '../common_columns';

const tableName = 'ds_product_items_attributes';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (t) => {
    commonColumns(knex, t);
    t.uuid('product_id').references('id').inTable('ds_product_items').onDelete('CASCADE');
    t.uuid('attribute_id').references('id').inTable('ds_product_attributes').onDelete('CASCADE');
    t.text('value');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
