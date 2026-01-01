import { create } from 'zustand';

import type { IUseCurrentOrderState } from './use-current-order-store.types';
import { getNextOrderNumber } from '@/services';

export const useCurrentOrderStore = create<IUseCurrentOrderState>(
  (set, get) => ({
    id: null,
    number: null,
    items: [],
    rounds: [],

    addItem: (itemToAdd) => {
      const { number, items, rounds } = get();

      // If no exists a current order
      if (!number) {
        set({
          number: getNextOrderNumber(),
          items: [itemToAdd],
          rounds: [[itemToAdd]],
        });

        return;
      }

      // If exists a current order
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

      // ====

      const currentRound = rounds.length - 1;

      const existingItemInRound = rounds[currentRound].find(
        (item) => item.productId === itemToAdd.productId,
      );

      const updatedCurrentRound = existingItemInRound
        ? rounds[currentRound].map((item) =>
            item.productId === itemToAdd.productId
              ? { ...item, quantity: item.quantity + itemToAdd.quantity }
              : item,
          )
        : [...rounds[currentRound], itemToAdd];

      const updatedRounds = [...rounds.slice(0, -1), updatedCurrentRound];

      set({ items: updatedItems, rounds: updatedRounds });
    },
    subtractItem: (itemToSubtract) => {
      const { number, items, rounds } = get();

      // If no exists a current order do nothing
      if (!number) return;

      // If exists a current order
      const existingItem = items.find(
        (item) => item.productId === itemToSubtract.productId,
      );

      // ====

      const currentRound = rounds.length - 1;

      const existingItemInRound = rounds[currentRound].find(
        (item) => item.productId === itemToSubtract.productId,
      );

      if (!existingItem && !existingItemInRound) return;

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

      const updatedCurrentRound = rounds[currentRound]
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

      const updatedRounds = [...rounds.slice(0, -1), updatedCurrentRound];

      set({ items: updatedItems, rounds: updatedRounds });
    },
    deleteItem: (idToDelete) => {
      const { number, items, rounds } = get();

      // If no exists a current order do nothing
      if (!number) return;

      const updatedItems = items.filter(
        (item) => item.productId !== idToDelete,
      );

      // ====

      const currentRound = rounds.length - 1;

      const updatedCurrentRound = rounds[currentRound].filter(
        (item) => item.productId !== idToDelete,
      );

      const updatedRounds = [...rounds.slice(0, -1), updatedCurrentRound];

      set({ items: updatedItems, rounds: updatedRounds });
    },
    clearOrder: () => {
      set({ id: null, number: null, items: [], rounds: [] });
    },
    setExistingOrderAndNewRound: (order) => {
      set({
        id: order.id,
        number: order.number,
        items: [...order.items],
        rounds: [...order.rounds, []],
      });
    },
  }),
);
