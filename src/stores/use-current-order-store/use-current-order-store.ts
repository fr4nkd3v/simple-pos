import { create } from 'zustand';

import type { IUseCurrentOrderState } from './use-current-order-store.types';
import { generateUUID } from '@/utils';

export const useCurrentOrderStore = create<IUseCurrentOrderState>(
  (set, get) => ({
    id: null,
    number: null,
    items: [],
    addItem: (item) => {
      // If no has number and id order, then set them
      if (get().number && get().id) {
        return set({ items: [item] });
      }

      return set({
        id: generateUUID(),
      });
    },
    clearOrder: () => set({ id: null, number: null, items: [] }),
    addFirstItems: (id, number, products) =>
      set({ id, number, items: [...products] }),
    addItems: (products) =>
      set((state) => ({ items: [...state.items, ...products] })),
  }),
);
