import type { IProduct } from './products.types';

export interface IOrderItem {
  productId: string;
  quantity: number;
}

export interface IOrderRound {
  number: number;
  items: IOrderItem[];
}

export interface IOrder {
  id: string; // UUID
  number: number; // Order number. e.j. # 35
  createdAt: string; // Date the order was created
  updatedAt?: string; // Last date the order was updated
  // client: string; // Client Data
  // TODO: Rounds is part of new structure, make it mandatory later and remove items
  items: IOrderItem[];
  rounds: IOrderRound[];
}

export type TDetailedOrderItem = Omit<IOrderItem, 'productId'> & IProduct;

export interface IDetailedOrderRound extends Pick<IOrderRound, 'number'> {
  items: TDetailedOrderItem[];
}
