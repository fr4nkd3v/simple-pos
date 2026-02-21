import { getProductDetail, getProductPrice } from '@/services';
import {
  EPaymentMethod,
  type IDetailedOrderRound,
  type IOrderItem,
  type IOrderRound,
  type TPaymentItem,
} from '@/types';

export const formatNumberToPrice = (price: number): string => {
  return 'S/ ' + price.toFixed(2);
};

type TFormatToPriceOptions = {
  showSymbol?: boolean;
  forceDecimals?: boolean;
};

export const formatToPrice = (
  amount: number | string,
  optionals: TFormatToPriceOptions = { showSymbol: true, forceDecimals: true },
): string => {
  const value = typeof amount === 'string' ? parseFloat(amount) : amount;

  // Validate if the result is a valid number
  if (isNaN(value)) {
    throw new Error('El valor proporcionado no es un número válido.');
  }

  const { showSymbol = true, forceDecimals = true } = optionals;

  return new Intl.NumberFormat('es-PE', {
    style: showSymbol ? 'currency' : 'decimal',
    currency: 'PEN',
    minimumFractionDigits: forceDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(value);
};

export const capitalize = (text: string) => {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

export const generateUUID = (): string => {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID();
  }

  console.warn('crypto.randomUUID is unavailable. Generating basic UUID.');
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const formattedDate = (date: Date) => {
  return new Intl.DateTimeFormat('es-PE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const getFirstAvailableDebitPaymentMethod = (
  paymentItems: TPaymentItem[],
): EPaymentMethod | null => {
  if (paymentItems.length <= 0) {
    return EPaymentMethod.CASH;
  }

  const availableMethods = [] as EPaymentMethod[];

  const hasCash = paymentItems.some(
    (item) => item.method === EPaymentMethod.CASH,
  );
  const hasYape = paymentItems.some(
    (item) => item.method === EPaymentMethod.YAPE,
  );
  const hasPlin = paymentItems.some(
    (item) => item.method === EPaymentMethod.PLIN,
  );
  const hasOther = paymentItems.some(
    (item) => item.method === EPaymentMethod.OTHER,
  );

  if (!hasCash) availableMethods.push(EPaymentMethod.CASH);
  if (!hasYape) availableMethods.push(EPaymentMethod.YAPE);
  if (!hasPlin) availableMethods.push(EPaymentMethod.PLIN);
  if (!hasOther) availableMethods.push(EPaymentMethod.OTHER);

  if (availableMethods.length > 0) {
    return availableMethods[0];
  }

  return null;
};

export const getAvailableDebitPaymentMethods = (
  paymentItems: TPaymentItem[],
): EPaymentMethod[] => {
  const availableMethods = [] as EPaymentMethod[];

  const hasCash = paymentItems.some(
    (item) => item.method === EPaymentMethod.CASH,
  );
  const hasYape = paymentItems.some(
    (item) => item.method === EPaymentMethod.YAPE,
  );
  const hasPlin = paymentItems.some(
    (item) => item.method === EPaymentMethod.PLIN,
  );
  const hasOther = paymentItems.some(
    (item) => item.method === EPaymentMethod.OTHER,
  );

  if (!hasCash) availableMethods.push(EPaymentMethod.CASH);
  if (!hasYape) availableMethods.push(EPaymentMethod.YAPE);
  if (!hasPlin) availableMethods.push(EPaymentMethod.PLIN);
  if (!hasOther) availableMethods.push(EPaymentMethod.OTHER);

  return availableMethods;
};

export const getPlainOrderItems = (rounds: IOrderRound[]): IOrderItem[] => {
  const plainItems = rounds.reduce((acc: IOrderItem[], round) => {
    return [...acc, ...round.items];
  }, []);

  const itemsAsObject = plainItems.reduce(
    (acc: Record<string, IOrderItem>, item) => {
      if (acc[item.productId]) {
        acc[item.productId].quantity += item.quantity;
      } else {
        acc[item.productId] = { ...item };
      }
      return acc;
    },
    {},
  );

  const allItems = Object.values(itemsAsObject);

  return allItems;
};

export const getOrderTotalPrice = (items: IOrderItem[]) => {
  const totalPrice = items.reduce((sum, item) => {
    return sum + item.quantity * getProductPrice(item.productId);
  }, 0);

  return totalPrice;
};

export const getDetailedRounds = (
  rounds: IOrderRound[],
): IDetailedOrderRound[] => {
  return rounds.map((round) => {
    return {
      number: round.number,
      items: round.items
        .map((item) => {
          const product = getProductDetail(item.productId);
          if (!product) return null;

          return { ...product, quantity: item.quantity };
        })
        .filter((item) => item !== null),
    };
  });
};
