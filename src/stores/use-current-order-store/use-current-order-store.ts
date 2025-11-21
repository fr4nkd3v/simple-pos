import { create } from 'zustand';

import type { IUseCurrentOrderState } from './use-current-order-store.types';

export const useCurrentOrderStore = create<IUseCurrentOrderState>((set) => ({
  id: null,
  number: null,
  products: [],
  addFirstProducts: (id, number, products) =>
    set({ id, number, products: [...products] }),
  addProducts: (products) =>
    set((state) => ({ products: [...state.products, ...products] })),
}));
