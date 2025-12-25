import { getProductDetail, getProductPrice } from '@/services/products';
import { useCurrentOrderStore } from '@/stores/use-current-order-store';
import { useMemo } from 'react';

export const useCurrentOrderDetail = () => {
  const {
    number: orderNumber,
    items: orderItems,
    addItem: addCurrentOrderItem,
    subtractItem: subtractCurrentOrderItem,
    deleteItem: deleteCurrentOrderItem,
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

  return {
    orderNumberLabel: `Cuenta #${orderNumber}`,
    itemsCount,
    totalPrice,
    orderItems: detailedItems,
    addCurrentOrderItem,
    subtractCurrentOrderItem,
    deleteCurrentOrderItem,
  };
};
