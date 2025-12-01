import type { IOrderItem } from '@/types';

export interface IUseCurrentOrderState {
  id: string | null;
  number: number | null;
  items: IOrderItem[];
  addItem: (itemToAdd: IOrderItem) => void;
  clearOrder: () => void;
  // addFirstItems: (id: string, number: number, products: IOrderItem[]) => void;
  // addItems: (products: IOrderItem[]) => void;
}
