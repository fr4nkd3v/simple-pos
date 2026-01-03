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
          rounds: [{ number: 1, items: [itemToAdd] }],
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

      const lastRoundNumber = rounds.length;
      const currentRound = rounds.find(
        (round) => round.number === lastRoundNumber,
      );

      if (!currentRound) {
        set({ items: updatedItems });
        return;
      }

      const existingItemInRound = currentRound.items.find(
        (item) => item.productId === itemToAdd.productId,
      );

      const updatedCurrentRound = {
        number: currentRound.number,
        items: existingItemInRound
          ? currentRound.items.map((item) =>
              item.productId === itemToAdd.productId
                ? { ...item, quantity: item.quantity + itemToAdd.quantity }
                : item,
            )
          : [...currentRound.items, itemToAdd],
      };

      const updatedRounds = [
        ...rounds.filter((round) => round.number !== lastRoundNumber),
        updatedCurrentRound,
      ];

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

      const lastRoundNumber = rounds.length;
      const currentRound = rounds.find(
        (round) => round.number === lastRoundNumber,
      );

      if (!currentRound) return;

      const existingItemInRound = currentRound.items.find(
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

      const updatedCurrentRound = {
        number: currentRound.number,
        items: currentRound.items
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
          .filter((item) => item.quantity > 0),
      };

      const updatedRounds = [
        ...rounds.filter((round) => round.number !== lastRoundNumber),
        updatedCurrentRound,
      ];

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

      const lastRoundNumber = rounds.length;
      const currentRound = rounds.find(
        (round) => round.number === lastRoundNumber,
      );

      if (!currentRound) {
        set({ items: updatedItems });
        return;
      }

      const updatedCurrentRound = {
        number: currentRound.number,
        items: currentRound.items.filter(
          (item) => item.productId !== idToDelete,
        ),
      };

      const updatedRounds = [
        ...rounds.filter((round) => round.number !== lastRoundNumber),
        updatedCurrentRound,
      ];

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
        rounds: [
          ...order.rounds,
          {
            number: order.rounds.length + 1,
            items: [],
          },
        ],
      });
    },
  }),
);
