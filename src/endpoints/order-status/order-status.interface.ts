export interface OrderStatus {
  id: string;
  name: string;
}

export enum OrderStatusValues {
  pending = 'pending',
  processing = 'processing',
  failed = 'failed',
  cancelled = 'cancelled',
  completed = 'completed',
  shipped = 'shipped',
  sent = 'sent',
}
