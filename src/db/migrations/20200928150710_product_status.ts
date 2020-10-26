import * as Knex from 'knex';
import { commonColumns } from '../common_columns';

const tableName = 'ds_product_status';

/** Product status */
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    commonColumns(knex, table);
    table.string('name').notNullable().index();
  });
}

export async function down(knex: Knex): Promise<void> {
  //
  await knex.schema.dropTableIfExists(tableName);
}
