import { create } from 'zustand';
import { EPaymentMethod, EPaymentType, type TPaymentItem } from '@/types';
import { getFirstAvailablePaymentMethod } from '@/utils';

export interface IUsePayOrderState {
  id: string | null;
  paymentItems: TPaymentItem[];
  setOrderToPay: (orderId: string) => void;
  addDebitPaymentItem: () => void;
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
  id: 'eb54443d-de2b-4c69-9119-43b44574dde0', // TODO: change to null
  paymentItems: [
    {
      type: EPaymentType.DEBIT,
      amount: 10, // TODO: Esto debe ser la totalidad de la cuenta
      method: EPaymentMethod.CASH, // TODO: Por default será Cash el primer metodo
    },
  ],
  setOrderToPay: (orderId) => {
    set({ id: orderId });
  },
  addDebitPaymentItem: () => {
    const { paymentItems } = get();
    console.log('paymentItems:', JSON.stringify(paymentItems, null, 2));

    const nextAvailableMethod = getFirstAvailablePaymentMethod(paymentItems);
    if (!nextAvailableMethod) return;

    console.log('nextAvailableMethod:', nextAvailableMethod);

    const newItem: TPaymentItem = {
      amount: 0,
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
