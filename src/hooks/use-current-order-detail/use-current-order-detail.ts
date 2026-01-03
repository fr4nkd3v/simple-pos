import { getProductDetail, getProductPrice } from '@/services/products';
import { useCurrentOrderStore } from '@/stores/use-current-order-store';
import type { IDetailedOrderRound } from '@/types';
import { useCallback, useMemo } from 'react';

export const useCurrentOrderDetail = () => {
  const {
    number: orderNumber,
    id: orderId,
    items: orderItems,
    rounds: orderRounds,
    addItem: addCurrentOrderItem,
    subtractItem: subtractCurrentOrderItem,
    deleteItem: deleteCurrentOrderItem,
    clearOrder: clearCurrentOrder,
  } = useCurrentOrderStore();

  const { itemsCount, totalPrice } = useMemo(
    () =>
      orderItems.reduce(
        (sum, item) => ({
          itemsCount: sum.itemsCount + item.quantity,
          totalPrice:
            sum.totalPrice + item.quantity * getProductPrice(item.productId),
        }),
        {
          itemsCount: 0,
          totalPrice: 0,
        },
      ),
    [orderItems],
  );

  const detailedItems = useMemo(
    () =>
      orderItems
        .map((item) => {
          const productDetail = getProductDetail(item.productId);
          if (!productDetail) return null;

          return { quantity: item.quantity, ...productDetail };
        })
        .filter((item) => item !== null),
    [orderItems],
  );

  const detailedRounds = useMemo(
    () =>
      [...orderRounds]
        .map((round) => {
          const detailedRound: IDetailedOrderRound = {
            number: round.number,
            items: round.items
              .map((item) => {
                const productDetail = getProductDetail(item.productId);
                if (!productDetail) return null;

                return { quantity: item.quantity, ...productDetail };
              })
              .filter((item) => item !== null),
          };

          return detailedRound;
        })
        .sort((a, b) => a.number - b.number),
    [orderRounds],
  );

  const detailedReverseRounds = useMemo(
    () => [...detailedRounds].reverse(),
    [detailedRounds],
  );

  const getQuantityInCurrentOrder = useCallback(
    (productId: string): number | undefined => {
      const foundItem = orderItems.find((item) => item.productId === productId);
      if (!foundItem || foundItem.quantity < 1) return;

      return foundItem.quantity;
    },
    [orderItems],
  );

  const getQuantityInCurrentRound = useCallback(
    (productId: string): number | undefined => {
      if (!orderRounds.length) return;

      const lastRoundNumber = orderRounds.length;
      const currentRound = orderRounds.find(
        (round) => round.number === lastRoundNumber,
      );

      if (!currentRound) return;

      const foundItem = currentRound.items.find(
        (item) => item.productId === productId,
      );
      if (!foundItem || foundItem.quantity < 1) return;

      return foundItem.quantity;
    },
    [orderRounds],
  );

  const isEditing = orderRounds.length > 1;

  return {
    orderNumber,
    orderNumberLabel: `Cuenta #${orderNumber}`,
    currentOrderId: orderId,
    itemsCount,
    totalPrice,
    currentOrderDetailedItems: detailedItems,
    currentOrderItems: orderItems,
    currentOrderRounds: orderRounds,
    currentOrderDetailedRounds: detailedRounds,
    currentOrderDetailedReverseRounds: detailedReverseRounds,
    addCurrentOrderItem,
    subtractCurrentOrderItem,
    deleteCurrentOrderItem,
    clearCurrentOrder,
    getQuantityInCurrentOrder,
    getQuantityInCurrentRound,
    isEditing,
  };
};
