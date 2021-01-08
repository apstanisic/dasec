import type { AuthenticationService, ItemsService } from 'directus/dist/services';
import type { ExtensionContext, PrimaryKey, Query } from 'directus/dist/types';
import type Exceptions from 'directus/dist/exceptions';
import Joi from 'joi';
import { Struct } from './types';
import { Request } from 'express';

/**
 * Higher level class for fetching data
 * This are mostly wrappers around Directus ItemsService methods
 * that have better return values, support generics...
 */
export class DataService<T extends Struct = Struct> {
  /**
   * Used for accessing data
   */
  public items: ItemsService;
  /**
   * Used for auth
   * @deprecated I do not know if I need this
   */
  protected auth: AuthenticationService;
  /**
   * Extension Context
   */
  protected ctx: ExtensionContext;

  /**
   * Express request used in this service
   */
  protected req: Request;
  /**
   *
   */
  exceptions: typeof Exceptions;

  constructor(table: string, params: { req: Request; ctx: ExtensionContext }) {
    this.ctx = params.ctx;
    this.req = params.req;

    // It can't accept acc on Record?
    const accountability = (params.req as any)?.accountability ?? null;
    this.items = new this.ctx.services.ItemsService(table, { accountability });
    this.auth = new this.ctx.services.AuthenticationService({ accountability });
    this.exceptions = this.ctx.exceptions;
  }
  //   constructor(public readonly items: ItemsService, private readonly ctx: ExtensionContext) {}
  //   constructor(...params: ConstructorParameters<typeof ItemsService>) {
  //     super(...params);
  //   }

  getConParams() {
    return { req: this.req, ctx: this.ctx };
  }

  /**
   * Find many items
   * This always returns array, and supports generics
   * @param query Directus query object
   */
  async find(query: Query = {}): Promise<T[]> {
    const res = await this.items.readByQuery({ ...query, single: false });
    if (!Array.isArray(res)) throw new Error('Internal Error');
    return res as T[];
  }

  /**
   * Find one item
   * Returns either that object or null, and supports generics
   * @param queryOrId Directus query object or primary key
   */
  async findOne(queryOrId: Query | PrimaryKey): Promise<T | null> {
    if (typeof queryOrId === 'string' || typeof queryOrId === 'number') {
      return (await this.items.readByKey(queryOrId)) as T | null;
    }
    const res = await this.items.readByQuery({ ...queryOrId, single: true });
    if (Array.isArray(res)) throw new Error('Internal Error');
    return res as T;
  }

  async findByIds(ids: PrimaryKey[]): Promise<T[]> {
    const values = await this.items.readByKey(ids);
    if (!values) throw new this.exceptions.ForbiddenException();
    return values as T[];
  }

  async findOneOrFail(queryOrId: Query | PrimaryKey): Promise<T> {
    const res = await this.findOne(queryOrId);
    if (!res) throw new this.exceptions.RouteNotFoundException('');
    return res;
  }

  /**
   * Update record by id
   * @param id Id or ids that user want to update
   * @param data New data
   * @returns Array if provided array of ids, single item if provided single item
   */
  updateById(id: PrimaryKey, data: Partial<T>): Promise<T>;
  updateById(id: PrimaryKey[], data: Partial<T>): Promise<T[]>;
  async updateById(id: PrimaryKey | PrimaryKey[], data: Partial<T>): Promise<T | T[]> {
    // TypeScript is complaining if I don't do this
    if (Array.isArray(id)) {
      const updatedKeys = await this.items.update(data, id);
      const updatedValues = ((await this.items.readByKey(updatedKeys)) ?? []) as T[];
      return updatedValues;
    } else {
      const updatedKey = await this.items.update(data, id);
      const updatedValues = (await this.items.readByKey(updatedKey)) as T;
      return updatedValues;
    }
  }

  /**
   * Update every object that fullfills query filter
   * @param query Directus query
   * @param data New data
   * @returns Array with updated values
   */
  async updateWhere(query: Query, data: Partial<T>): Promise<T[]> {
    const updatedKeys = await this.items.updateByQuery(query, data);
    const updatedValues = ((await this.items.readByKey(updatedKeys)) ?? []) as T[];
    return updatedValues;
  }

  async createItems(data: Partial<T>[]): Promise<T[]> {
    const ids = await this.items.create(data);
    const saved = await this.findByIds(ids);
    return saved;
  }

  async createItem(data: Partial<T>): Promise<T> {
    const saved = await this.createItems([data]);
    return saved[0];
  }

  /**
   * Validate data
   * @param body Data to be validated
   * @param validator Joi schema instance to be used for validation
   */
  protected validatePayload<T = Record<string, any>>(
    body: Record<string, any>,
    validator: Joi.ObjectSchema<T>,
  ): T {
    const validParams = validator.validate(body, {
      stripUnknown: true,
    });
    if (validParams.error) {
      throw new this.ctx.exceptions.InvalidPayloadException('Invalid params.');
    }
    return validParams.value as T;
  }

  /**
   * Check if provided user id is equal logged in user id
   * @param userId User id
   * Do I need to do this or is this built in in ItemsService ?
   */
  protected get userId(): string {
    if (!this.items.accountability?.user) {
      throw new this.ctx.exceptions.ForbiddenException();
    }
    return this.items.accountability.user;
  }
}
