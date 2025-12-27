import type { IOrderItem } from '@/types';

export interface IUseCurrentOrderState {
  id: string | null;
  number: number | null;
  items: IOrderItem[];
  addItem: (itemToAdd: IOrderItem) => void;
  subtractItem: (itemToSubtract: IOrderItem) => void;
  deleteItem: (idToDelete: string) => void;
  clearOrder: () => void;
}
