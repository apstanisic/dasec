import * as Knex from 'knex';
import Faker from 'faker';
import { times, flatten } from 'lodash';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('ds_buyer_addresses').del();

  const users = await knex<{ id: string }>('directus_users');

  // Each user can have from 0 to 3 addresses
  const data = flatten(
    users.map((user) =>
      times(Faker.random.number({ min: 0, max: 3 }), (i) => ({
        address: Faker.address.streetAddress(),
        city: Faker.address.city(),
        postal_code: Faker.address.zipCode(),
        country: Faker.address.country(),
        user_id: user.id,
      })),
    ),
  );

  // Inserts seed entries
  await knex('ds_buyer_addresses').insert(data);
}
