import { getProductDetail, getProductPrice } from '@/services/products';
import { useCurrentOrderStore } from '@/stores/use-current-order-store';
import { useCallback, useMemo } from 'react';

export const useCurrentOrderDetail = () => {
  const {
    number: orderNumber,
    items: orderItems,
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

  const getQuantityInCurrentOrder = useCallback(
    (productId: string): number | undefined => {
      const foundItem = orderItems.find((item) => item.productId === productId);
      if (!foundItem || foundItem.quantity < 1) return;

      return foundItem.quantity;
    },
    [orderItems],
  );

  return {
    orderNumber,
    orderNumberLabel: `Cuenta #${orderNumber}`,
    itemsCount,
    totalPrice,
    currentOrderDetailedItems: detailedItems,
    currentOrderItems: orderItems,
    addCurrentOrderItem,
    subtractCurrentOrderItem,
    deleteCurrentOrderItem,
    clearCurrentOrder,
    getQuantityInCurrentOrder,
  };
};
