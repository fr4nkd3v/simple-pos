import { createContext, useContext } from 'react';
import type {
  IOrderContextValue,
  TOrderProviderProps,
} from './order-item.types';

const OrderContext = createContext<IOrderContextValue | null>(null);

export const useOrderContext = () => {
  const ctx = useContext(OrderContext);
  if (!ctx)
    throw new Error('useOrderContext must be used within OrderProvider');
  return ctx;
};

export const OrderProvider = ({
  order,
  isExpanded,
  toggleExpanded,
  children,
}: TOrderProviderProps) => {
  return (
    <OrderContext.Provider value={{ order, isExpanded, toggleExpanded }}>
      {children}
    </OrderContext.Provider>
  );
};
