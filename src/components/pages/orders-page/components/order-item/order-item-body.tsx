import { Fragment } from 'react/jsx-runtime';
import { useOrderContext } from './order-item.context';
import { useMemo } from 'react';
import type { IDetailedOrderRound } from '@/types';
import { formatToPrice, getDetailedRounds } from '@/utils';
import { Badge } from '@/components/shared';

export const OrderItemBody = () => {
  const { order, isExpanded } = useOrderContext();

  const detailedRounds: IDetailedOrderRound[] = useMemo(() => {
    return getDetailedRounds(order.rounds);
  }, [order.rounds]);

  const compactRoundList = detailedRounds.map((round) => (
    <div
      key={round.number}
      className='flex gap-2'
    >
      <div className='w-22'>
        <Badge variant='secondary'>Ronda {round.number}</Badge>
      </div>
      <p>
        {round.items.map((item, index) => (
          <Fragment key={item.id}>
            {index > 0 && <span> + </span>}
            <span>{item.name} </span>
            <span className='font-semibold lining-nums tabular-nums text-gray-900'>
              x{item.quantity}
            </span>
          </Fragment>
        ))}
      </p>
    </div>
  ));

  const { totalPrice } = useMemo(() => {
    let totalQuantity = 0,
      totalPrice = 0;

    for (const round of detailedRounds) {
      for (const item of round.items) {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
      }
    }

    return { totalQuantity, totalPrice };
  }, [detailedRounds]);

  return (
    <div>
      {!isExpanded && (
        <div className='space-y-2 text-sm'>{compactRoundList}</div>
      )}

      {isExpanded && (
        <ol className='rounded-lg border border-gray-200'>
          {detailedRounds.map((round) => (
            <li
              key={round.number}
              className='flex flex-col gap-2 pb-3'
            >
              <div className='bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500'>
                Ronda {round.number}
              </div>
              <ul>
                {round.items.map((item) => (
                  <li
                    className='flex gap-2 px-5 text-sm'
                    key={item.id}
                  >
                    <p className='flex flex-1 gap-2'>
                      <span className='lining-nums tabular-nums'>
                        x{item.quantity}
                      </span>
                      <span>{item.name}</span>
                    </p>

                    <p>{formatToPrice(item.price * item.quantity)}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      )}

      <div className='flex justify-end pt-3'>
        <div className='flex items-center gap-1 text-gray-900'>
          <span className='text-sm text-gray-600'>Total:</span>
          <span className='font-bold'>{formatToPrice(totalPrice)}</span>
        </div>
      </div>
    </div>
  );
};
