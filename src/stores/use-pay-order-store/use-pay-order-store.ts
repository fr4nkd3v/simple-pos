import { create } from 'zustand';
import { EPaymentMethod, EPaymentType, type IPaymentItemFull } from '@/types';
import { getFirstAvailableDebitPaymentMethod } from '@/utils';

// TODO: Refactor this store to be more generic, not only for orders but also for other payment contexts (e.g., cash register).
// TODO: validate if all methods are been used, if any one is no used so remove
export interface IUsePayOrderState {
  id: string | null;
  paymentItems: IPaymentItemFull[];
  setOrderToPay: (orderId: string) => void;
  setOrderAndDebitPayment: (orderId: string, amount: number) => void;
  addDebitPaymentItem: (amount: number) => void;
  updateDebitPaymentItem: (
    method: EPaymentMethod,
    amount: number,
    newMethod?: EPaymentMethod,
  ) => void;
  deleteDebitPaymentItem: (method: EPaymentMethod) => void;
  changeUniquePaymentItemMethod: (method: EPaymentMethod) => void;
  saveCreditPaymentItem: (amount: number) => void;
  clearAll: () => void;
  disableDebitPayments: () => void;
  enableDebitPayments: () => void;
  disableCreditPayment: () => void;
  enableCreditPayment: () => void;
}

export const usePayOrderStore = create<IUsePayOrderState>((set, get) => ({
  id: null,
  paymentItems: [],
  setOrderToPay: (orderId) => {
    set({ id: orderId });
  },
  setOrderAndDebitPayment: (orderId, amount) => {
    const firstPaymentItem: IPaymentItemFull = {
      type: EPaymentType.DEBIT,
      amount,
      method: EPaymentMethod.CASH,
      enabled: true,
    };

    set({ id: orderId, paymentItems: [firstPaymentItem] });
  },
  addDebitPaymentItem: (amount) => {
    const { paymentItems } = get();

    const nextAvailableMethod =
      getFirstAvailableDebitPaymentMethod(paymentItems);
    if (!nextAvailableMethod) return;

    const newItem: IPaymentItemFull = {
      amount,
      method: nextAvailableMethod,
      type: EPaymentType.DEBIT,
      enabled: true,
    };
    set({ paymentItems: [...paymentItems, newItem] });
  },
  updateDebitPaymentItem: (method, amount, newMethod) => {
    const { paymentItems } = get();

    const updatedItems = paymentItems.map((item) => {
      if (item.type === EPaymentType.DEBIT && item.method === method) {
        return {
          ...item,
          method: newMethod ?? item.method,
          amount,
        };
      }
      return item;
    });

    set({ paymentItems: updatedItems });
  },
  deleteDebitPaymentItem: (method) => {
    const { paymentItems } = get();

    const filteredItems = paymentItems.filter((item) => item.method !== method);
    set({ paymentItems: filteredItems });
  },
  changeUniquePaymentItemMethod: (method) => {
    const { paymentItems } = get();

    const [firstItem, ...restItems] = paymentItems;

    const modifiedFirstItem = {
      ...firstItem,
      method,
    };

    set({ paymentItems: [modifiedFirstItem, ...restItems] });
  },
  saveCreditPaymentItem: (amount) => {
    const { paymentItems } = get();
    const hasCreditPaymentItem = paymentItems.some(
      (item) =>
        item.type === EPaymentType.CREDIT &&
        item.method === EPaymentMethod.CREDIT,
    );

    const firstCreditItem: IPaymentItemFull = {
      amount,
      method: EPaymentMethod.CREDIT,
      type: EPaymentType.CREDIT,
      enabled: true,
    };

    const updatedItems = hasCreditPaymentItem
      ? paymentItems.map((item) => {
          if (
            item.type === EPaymentType.CREDIT &&
            item.method === EPaymentMethod.CREDIT
          ) {
            return {
              ...item,
              amount,
            };
          }

          return item;
        })
      : [...paymentItems, firstCreditItem];

    set({ paymentItems: updatedItems });
  },
  clearAll: () => {
    set({ paymentItems: [], id: null });
  },
  disableDebitPayments: () => {
    const { paymentItems } = get();
    const updatedItems = paymentItems.map((item) => {
      if (item.type === EPaymentType.DEBIT) {
        return { ...item, enabled: false };
      }
      return item;
    });
    set({ paymentItems: updatedItems });
  },
  enableDebitPayments: () => {
    const { paymentItems } = get();
    const updatedItems = paymentItems.map((item) => {
      if (item.type === EPaymentType.DEBIT) {
        return { ...item, enabled: true };
      }
      return item;
    });
    set({ paymentItems: updatedItems });
  },
  disableCreditPayment: () => {
    const { paymentItems } = get();
    const updatedItems = paymentItems.map((item) => {
      if (item.type === EPaymentType.CREDIT) {
        return { ...item, enabled: false };
      }
      return item;
    });
    set({ paymentItems: updatedItems });
  },
  enableCreditPayment: () => {
    const { paymentItems } = get();
    const updatedItems = paymentItems.map((item) => {
      if (item.type === EPaymentType.CREDIT) {
        return { ...item, enabled: true };
      }
      return item;
    });
    set({ paymentItems: updatedItems });
  },
}));
