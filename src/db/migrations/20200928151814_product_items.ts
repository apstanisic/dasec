import * as Knex from 'knex';
import { commonColumns } from '../common_columns';

const tableName = 'ds_product_items';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    commonColumns(knex, table);
    table.string('sku').notNullable().unique();
    table.string('name').notNullable();
    table.text('long_description').notNullable().defaultTo('');
    table.string('short_description').notNullable().defaultTo('');
    table.boolean('available').notNullable().defaultTo(true);
    table.integer('regular_price').notNullable().index();
    table.integer('discount_price').nullable();
    table.dateTime('discounted_from').nullable();
    table.dateTime('discounted_until').nullable();
    table.integer('quantity').nullable();
    table.integer('weight');
    table
      .uuid('category_id')
      .references('id')
      .inTable('ds_product_categories')
      .onDelete('SET NULL');
    // Primary image
    table.uuid('image_id').references('id').inTable('directus_files').onDelete('SET NULL');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
