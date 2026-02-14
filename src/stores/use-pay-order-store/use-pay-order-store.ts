import { create } from 'zustand';
import { EPaymentMethod, EPaymentType, type TPaymentItem } from '@/types';
import { getFirstAvailablePaymentMethod } from '@/utils';

export interface IUsePayOrderState {
  id: string | null;
  paymentItems: TPaymentItem[];
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
  clearAll: () => void;
}

export const usePayOrderStore = create<IUsePayOrderState>((set, get) => ({
  id: null,
  paymentItems: [],
  setOrderToPay: (orderId) => {
    set({ id: orderId });
  },
  setOrderAndDebitPayment: (orderId, amount) => {
    const firstPaymentItem: TPaymentItem = {
      type: EPaymentType.DEBIT,
      amount,
      method: EPaymentMethod.CASH,
    };

    set({ id: orderId, paymentItems: [firstPaymentItem] });
  },
  addDebitPaymentItem: (amount) => {
    const { paymentItems } = get();

    const nextAvailableMethod = getFirstAvailablePaymentMethod(paymentItems);
    if (!nextAvailableMethod) return;

    const newItem: TPaymentItem = {
      amount,
      method: nextAvailableMethod,
      type: EPaymentType.DEBIT,
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
  clearAll: () => {
    set({ paymentItems: [], id: null });
  },
}));
