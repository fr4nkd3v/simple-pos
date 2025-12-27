import type { IOrder } from '@/types';

export type TOrderItem = { order: IOrder };

export interface IOrderContextValue {
  order: IOrder;
  isExpanded: boolean;
  toggleExpanded: () => void;
}

export type TOrderProviderProps = {
  order: IOrder;
  isExpanded: boolean;
  toggleExpanded: () => void;
  children: React.ReactNode;
};
