export interface IOrderItem {
  productId: string;
  quantity: number;
}

export interface IOrder {
  id: string; // UUID
  number: number; // Order number. e.j. # 35
  createdAt: string; // Date the order was created
  // client: string; // Client Data
  items: IOrderItem[];
}
