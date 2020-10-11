import Knex from "knex";

/**
 *
 * @param knex - Knex instance
 * @param table - Table on which to create properties
 */
export function commonColumns(
  knex: Knex,
  table: Knex.CreateTableBuilder,
  options?: { primary?: string }
) {
  idColumn(knex, table, options?.primary ?? "id");
  createdAndUpdatedColumns(knex, table);
}

/**
 * Create created_at and updated_at columns
 * @param knex - Knex instance
 * @param table - DB table
 */
export function createdAndUpdatedColumns(
  knex: Knex,
  table: Knex.CreateTableBuilder
) {
  // Created at always have index, because it's not often used for sorting data.
  table
    .dateTime("created_at", { precision: 3, useTz: true })
    .notNullable()
    .defaultTo(knex.raw("NOW()"))
    .index();
  table
    .dateTime("updated_at", { precision: 3, useTz: true })
    .notNullable()
    .defaultTo(knex.raw("NOW()"));
}

/**
 * Create id column
 * @param knex - Knex instance
 * @param table - DB table
 */
export function idColumn(
  knex: Knex,
  table: Knex.CreateTableBuilder,
  name: string = "id"
) {
  table.uuid(name).defaultTo(knex.raw("gen_random_uuid()")).primary();
}
