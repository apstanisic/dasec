import { CommonFields } from '../core/types';
import { ProductItem } from '../product-items/product-item.interface';

export interface CartItem extends CommonFields {
  user_id: string;
  product_item_id: string | ProductItem;
  quantity: number;
}
