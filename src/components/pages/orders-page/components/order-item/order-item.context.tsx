import { createContext, useContext } from 'react';
import type { IOrder } from '@/types';

interface OrderContextValue {
  order: IOrder;
  isExpanded: boolean;
  toggleExpanded: () => void;
}

const OrderContext = createContext<OrderContextValue | null>(null);

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
}: {
  order: IOrder;
  isExpanded: boolean;
  toggleExpanded: () => void;
  children: React.ReactNode;
}) => {
  return (
    <OrderContext.Provider value={{ order, isExpanded, toggleExpanded }}>
      {children}
    </OrderContext.Provider>
  );
};
