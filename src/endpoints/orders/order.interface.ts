import type { PrimaryKey } from 'directus/dist/types';
import { OrderStatus } from '../order-status/order-status.interface';
import { OrderItem } from './order-item.interface';

export interface Order {
  id: string;
  created_at: Date;
  updated_at: Date;

  ordered_at: Date;
  shipped_at?: Date;
  paid_at?: Date;
  delivered_at?: Date;
  status_id: string | OrderStatus;
  order_address: string;
  order_city: string;
  order_postal_code: string;
  order_country: string;
  shipping_address: string;
  shipping_postal_code: string;
  shipping_city: string;
  shipping_country: string;
  shipping_price: number;
  //   items_price: number;
  // Not used currently
  transaction_id?: string;
  user_comment: string;

  items?: OrderItem[] | PrimaryKey[];
}
