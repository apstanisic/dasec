import * as Knex from 'knex';
import Faker from 'faker';
import { times } from 'lodash';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('ds_product_categories').del();

  const data = times(100, (i) => ({
    name: Faker.commerce.department(),
    description: Faker.commerce.productDescription(),
  }));

  // Inserts seed entries
  await knex('ds_product_categories').insert(data);
}
