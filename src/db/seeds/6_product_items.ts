import * as Knex from 'knex';
import { times } from 'lodash';
import Faker from 'faker';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('ds_product_items').del();

  const categories = await knex<{ id: string }>('ds_product_categories');

  const products = times(500, (i) => {
    return {
      sku: 'prod-' + i,
      name: Faker.commerce.productName(),
      long_description: Faker.commerce.productDescription(),
      short_description: Faker.commerce.productDescription(),
      regular_price: Faker.random.number({ min: 20, max: 1000 }) * 10,
      discount_price: null,
      discounted_from: null,
      discounted_until: null,
      quantity: Faker.random.number(1000),
      weight: Faker.random.number(10000),
      category_id: Faker.random.arrayElement(categories).id,
      available: true,
      image_id: null,
    };
  });

  // Inserts seed entries
  await knex('ds_product_items').insert(products);
}
