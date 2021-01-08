import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('ds_order_status').del();

  const data = [
    { name: 'pending' },
    { name: 'processing' },
    { name: 'failed' },
    { name: 'cancelled' },
    { name: 'completed' },
    { name: 'shipped' },
    { name: 'sent' },
  ];

  // Inserts seed entries
  await knex('ds_order_status').insert(data);
}
