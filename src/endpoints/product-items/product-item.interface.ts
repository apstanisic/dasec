import { CommonFields } from "../core/types";

export interface ProductItem extends CommonFields {
  sku: string;
  name: string;
  long_description: string;
  short_description: string;
  regular_price: number;
  discount_price: number;
  discounted_from: string | Date;
  discounted_until: string | Date;
  quantity: number;
  weight: number;
  status_id: string;
  category_id: string;
  image_id: string;
}
