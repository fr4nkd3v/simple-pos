import type { IOrder } from '@/types';
import { useState } from 'react';
import { OrderProvider } from './order-item.context';
import { OrderItemHeader } from './order-item-header';
import { OrderItemBody } from './order-item-body';
import { OrderItemFooter } from './order-item-footer';

export const OrderItem = ({ order }: { order: IOrder }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <OrderProvider
      order={order}
      isExpanded={isExpanded}
      toggleExpanded={toggleExpanded}
    >
      <li className='flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-3'>
        <OrderItemHeader />
        <OrderItemBody />
        <OrderItemFooter />
      </li>
    </OrderProvider>
  );
};
