import Joi from "joi";
import {
  AuthenticationService,
  ItemsService,
} from "../../../next/api/src/services";
import { EndpointContext } from "../../types";
import { Struct } from "./types";

export class CoreService {
  /**
   * Used for accessing data in table
   */
  protected repository: ItemsService = new this.ctx.services.ItemsService(
    this.collectionName
  );

  /**
   * Auth
   */
  protected auth: AuthenticationService = new this.ctx.services.AuthenticationService();

  /**
   * @param ctx Context provided by Directus
   * @param collectionName Collection name that this.items will use
   */
  constructor(protected ctx: EndpointContext, private collectionName: string) {}

  /**
   * Validate data
   * @param body Data to be validated
   * @param validator Joi schema instance to be used for validation
   */
  protected validatePayload<T = Record<string, any>>(
    body: Record<string, any>,
    validator: Joi.ObjectSchema<T>
  ): T {
    const validParams = validator.validate(body, {
      stripUnknown: true,
    });
    if (validParams.error) {
      throw new this.ctx.exceptions.InvalidPayloadException("Invalid params.");
    }
    return validParams.value as T;
  }

  /**
   * Check if provided user id is equal logged in user id
   * @param userId User id
   */
  protected checkAuth(): string {
    if (!this.auth.accountability?.user) {
      throw new this.ctx.exceptions.ForbiddenException();
    }
    return this.auth.accountability.user;
  }

  async getItems(body: Struct) {
    return await this.repository.readByQuery({ filter: body });
  }
}
