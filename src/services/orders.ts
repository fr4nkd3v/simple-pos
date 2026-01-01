import type { IOrder } from '@/types';
import { generateUUID } from '@/utils';

const LOCAL_STORAGE_ORDERS_KEY = 'orders';

export const getOrders = (sort: 'asc' | 'desc' = 'asc'): IOrder[] => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
    if (!data) return [];

    const parsedOrders = JSON.parse(data) as IOrder[];

    parsedOrders.sort((a, b) => {
      if (sort === 'asc') {
        return a.number - b.number;
      } else {
        return b.number - a.number;
      }
    });

    return parsedOrders;
  } catch (error) {
    console.error('Error retrieving purchase orders from localStorage:', error);
    return [];
  }
};

const getOrderById = (idToFind: string): IOrder | null => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
    if (!data) return null;

    const parsedOrders = JSON.parse(data) as IOrder[];

    const foundOrder = parsedOrders.find((order) => order.id === idToFind);
    if (!foundOrder) return null;

    return foundOrder;
  } catch (error) {
    console.error('Error retrieving purchase orders from localStorage:', error);
    return null;
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
  newOrder: Omit<IOrder, 'number' | 'id' | 'createdAt' | 'updatedAt'>,
): IOrder => {
  const existingOrders = getOrders();

  const orderToSave: IOrder = {
    ...newOrder,
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

export const updateOrder = (
  updatedOrder: Omit<IOrder, 'createdAt' | 'number' | 'updatedAt'>,
) => {
  const foundOrder = getOrderById(updatedOrder.id);
  if (!foundOrder) {
    console.error('Order not found in local storage');
    return;
  }

  const orderToUpdate: IOrder = {
    ...foundOrder,
    updatedAt: new Date().toISOString(),
    items: [...updatedOrder.items],
    rounds: [...updatedOrder.rounds],
  };

  const existingOrders = getOrders();
  const updatedOrders = existingOrders.map((order) => {
    if (order.id === updatedOrder.id) {
      return orderToUpdate;
    } else {
      return order;
    }
  });

  try {
    localStorage.setItem(
      LOCAL_STORAGE_ORDERS_KEY,
      JSON.stringify(updatedOrders),
    );
  } catch (error) {
    console.error('Error saving the order in localStorage:', error);
  }
};
