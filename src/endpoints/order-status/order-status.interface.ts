export interface OrderStatus {
  id: string;
  name: string;
}

const values = [
  "pending",
  "processing",
  "failed",
  "cancelled",
  "completed",
  "shipped",
  "sent",
];
