import { CommonFields } from "../core/types";

export interface OrderItem extends CommonFields {
  order_id: string | number;
  product_item_id: string;
  single_price: number;
  quantity: number;
  total_price: number;
  // This is in cash, not percentage. Percentage is calculated, and value is written here
  discount: number;
}
