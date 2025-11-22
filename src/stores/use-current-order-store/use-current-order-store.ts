import { create } from 'zustand';

import type { IUseCurrentOrderState } from './use-current-order-store.types';

export const useCurrentOrderStore = create<IUseCurrentOrderState>((set) => ({
  id: null,
  number: null,
  items: [],
  addFirstItems: (id, number, products) =>
    set({ id, number, items: [...products] }),
  addItems: (products) =>
    set((state) => ({ items: [...state.items, ...products] })),
}));
