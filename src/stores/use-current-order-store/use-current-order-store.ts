import { create } from 'zustand';

import type { IUseCurrentOrderState } from './use-current-order-store.types';
import { getNextOrderNumber } from '@/services';

export const useCurrentOrderStore = create<IUseCurrentOrderState>(
  (set, get) => ({
    id: null,
    number: null,
    items: [],

    addItem: (itemToAdd) => {
      const { number, items } = get();

      // If exists a current order
      if (number) {
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
        number: getNextOrderNumber(),
        items: [itemToAdd],
      });
    },
    subtractItem: (itemToSubtract) => {
      const { number, items } = get();

      // If no exists a current order do nothing
      if (!number) return;

      // If exists a current order
      const existingItem = items.find(
        (item) => item.productId === itemToSubtract.productId,
      );

      if (!existingItem) return;

      const updatedItems = items
        .map((item) => {
          if (item.productId === itemToSubtract.productId) {
            return {
              ...item,
              quantity: item.quantity - itemToSubtract.quantity,
            };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);

      set({ items: updatedItems });
    },
    deleteItem: (idToDelete) => {
      const { number, items } = get();

      // If no exists a current order do nothing
      if (!number) return;

      const updatedItems = items.filter(
        (item) => item.productId !== idToDelete,
      );

      set({ items: updatedItems });
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
