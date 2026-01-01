export interface IOrderItem {
  productId: string;
  quantity: number;
}

export interface IOrder {
  id: string; // UUID
  number: number; // Order number. e.j. # 35
  createdAt: string; // Date the order was created
  updatedAt?: string; // Last date the order was updated
  // client: string; // Client Data
  // TODO: Rounds is part of new structure, make it mandatory later and remove items
  items: IOrderItem[];
  rounds: IOrderItem[][];
}
