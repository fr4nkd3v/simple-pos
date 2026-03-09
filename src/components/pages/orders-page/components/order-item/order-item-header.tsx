import { Button, Icon } from '@/components/shared';
import { useOrderContext } from './order-item.context';
import { getDetailedRounds } from '@/utils';
import { useMemo } from 'react';
import type { IDetailedOrderRound } from '@/types/orders.types';

export const OrderItemHeader = () => {
  const { order, isExpanded, toggleExpanded } = useOrderContext();

  const detailedRounds: IDetailedOrderRound[] = useMemo(() => {
    return getDetailedRounds(order.rounds);
  }, [order.rounds]);

  const { totalQuantity } = useMemo(() => {
    let totalQuantity = 0;

    for (const round of detailedRounds) {
      for (const item of round.items) {
        totalQuantity += item.quantity;
      }
    }

    return { totalQuantity };
  }, [detailedRounds]);

  return (
    <div className='flex items-center justify-between gap-2'>
      <div className='flex items-center gap-2'>
        <Button
          size='icon'
          variant='bordered'
          onClick={toggleExpanded}
        >
          <Icon name={isExpanded ? 'arrowUpLi' : 'arrowDownLi'} />
        </Button>

        <div>
          <p className='flex flex-1 text-sm font-semibold text-gray-900'>
            Cuenta #{order.number}
          </p>

          <div className='flex items-center gap-0.5 text-gray-500'>
            <Icon
              name='bowlLi'
              className='size-4'
            />
            <span className='text-sm'>{totalQuantity}</span>
          </div>
        </div>
      </div>

      <Button
        size='icon'
        variant='bordered'
      >
        <Icon
          name='dotsLi'
          className='aspect-square w-6 text-gray-700'
        />
      </Button>
    </div>
  );
};
