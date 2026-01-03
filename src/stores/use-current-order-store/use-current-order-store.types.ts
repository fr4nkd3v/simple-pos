import type { IOrder, IOrderItem, IOrderRound } from '@/types';

export interface IUseCurrentOrderState {
  id: string | null;
  number: number | null;
  // TODO: Rounds is part of new structure, make it mandatory later and remove items
  rounds: IOrderRound[];
  items: IOrderItem[];
  addItem: (itemToAdd: IOrderItem) => void;
  subtractItem: (itemToSubtract: IOrderItem) => void;
  deleteItem: (idToDelete: string) => void;
  clearOrder: () => void;
  setExistingOrderAndNewRound: (order: Omit<IOrder, 'createdAt'>) => void;
}
