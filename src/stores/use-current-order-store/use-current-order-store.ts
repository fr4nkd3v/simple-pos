import { create } from 'zustand';

import type { IUseCurrentOrderState } from './use-current-order-store.types';
import { generateUUID } from '@/utils';
import { getNextOrderNumber } from '@/services';

export const useCurrentOrderStore = create<IUseCurrentOrderState>(
  (set, get) => ({
    id: null,
    number: null,
    items: [],

    addItem: (itemToAdd) => {
      const { id, number, items } = get();

      // If exists a current order
      if (id && number) {
        const existingItem = items.find(
          (item) => item.productId === itemToAdd.productId,
        );

        const updatedItems = existingItem
          ? items.map((item) =>
              item.productId === itemToAdd.productId
                ? { ...item, quantity: item.quantity + itemToAdd.quantity }
                : item,
            )
          : [...items, itemToAdd];

        set({ items: updatedItems });
        return;
      }

      // If no exists a current order
      set({
        id: generateUUID(),
        number: getNextOrderNumber(),
        items: [itemToAdd],
      });
    },
    clearOrder: () => {
      set({ id: null, number: null, items: [] });
    },
    // addFirstItems: (id, number, products) => {
    //   set({ id, number, items: [...products] });
    // },
    // addItems: (products) => {
    //   set((state) => ({ items: [...state.items, ...products] }));
    // },
  }),
);
