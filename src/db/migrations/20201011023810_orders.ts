import * as Knex from 'knex';
import { commonColumns } from '../common_columns';

const tableName = 'ds_orders';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (t) => {
    commonColumns(knex, t);
    // This is a public id ??
    t.dateTime('ordered_at', { useTz: true });
    t.dateTime('shipped_at', { useTz: true });
    t.dateTime('paid_at', { useTz: true });
    t.dateTime('delivered_at', { useTz: true });
    t.uuid('status_id').references('id').inTable('ds_order_status');
    t.string('order_address');
    t.string('order_city');
    t.string('order_postal_code');
    t.string('order_country');
    t.string('shipping_address');
    t.string('shipping_postal_code');
    t.string('shipping_city');
    t.string('shipping_country');
    t.integer('shipping_price');
    t.text('user_comment');
    // t.integer("items_price").notNullable();
    // Not used currently
    t.uuid('transaction_id').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
