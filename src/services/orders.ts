import type { IOrder } from '@/types';
import { generateUUID } from '@/utils';

const LOCAL_STORAGE_ORDERS_KEY = 'orders';

export const getOrders = (): IOrder[] => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
    if (!data) return [];

    return JSON.parse(data) as IOrder[];
  } catch (error) {
    console.error('Error retrieving purchase orders from localStorage:', error);
    return [];
  }
};

const calculateNextOrderNumber = (existingOrders: IOrder[]): number => {
  if (existingOrders.length === 0) return 1;

  // Find the highest order number and add 1 to it.
  const maxOrderNumber = existingOrders.reduce((max, order) => {
    return Math.max(max, order.number);
  }, 0); // Initialize at 0

  return maxOrderNumber + 1;
};

export const getNextOrderNumber = () => {
  const existingOrders = getOrders();

  return calculateNextOrderNumber(existingOrders);
};

export const registerOrder = (
  newOrderData: Omit<IOrder, 'number' | 'id' | 'createdAt'>,
): IOrder => {
  const existingOrders = getOrders();

  const orderToSave: IOrder = {
    ...newOrderData,
    id: generateUUID(),
    number: calculateNextOrderNumber(existingOrders),
    createdAt: new Date().toISOString(),
  };

  const updatedOrders = [...existingOrders, orderToSave];

  try {
    localStorage.setItem(
      LOCAL_STORAGE_ORDERS_KEY,
      JSON.stringify(updatedOrders),
    );
  } catch (error) {
    console.error('Error saving the order in localStorage:', error);
  }

  return orderToSave;
};
