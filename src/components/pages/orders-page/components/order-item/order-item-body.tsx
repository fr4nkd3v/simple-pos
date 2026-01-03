import { Icon } from '@/components/shared';
import { Fragment } from 'react/jsx-runtime';
import { useOrderContext } from './order-item.context';
import { getProductDetail } from '@/services';
import { useMemo } from 'react';
import type { IDetailedOrderRound } from '@/types';

export const OrderItemBody = () => {
  const { order, isExpanded } = useOrderContext();

  const detailedRounds: IDetailedOrderRound[] = useMemo(() => {
    return order.rounds.map((round) => {
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
  }, [order.rounds]);

  const compactRoundList = detailedRounds.map((round) => (
    <Fragment key={round.number}>
      <p className='font-semibold text-gray-400'>Ronda {round.number}:</p>
      <p className='pl-4'>
        {round.items.map((item, index) => (
          <Fragment key={item.id}>
            {index > 0 && <span> + </span>}
            <span className='font-semibold lining-nums tabular-nums'>
              {item.quantity}
            </span>{' '}
            <span>{item.name}</span>
          </Fragment>
        ))}
      </p>
    </Fragment>
  ));

  const { totalQuantity, totalPrice } = useMemo(() => {
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
      {!isExpanded && <div className='text-sm'>{compactRoundList}</div>}

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
                        {item.quantity}
                      </span>
                      <span>{item.name}</span>
                    </p>

                    <p>S/ {(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      )}

      <div className='flex justify-between pt-3'>
        <div className='flex items-center gap-1 text-gray-500'>
          <Icon
            name='bowlLi'
            className='aspect-square h-5'
          />
          <span className='font-semibold'>{totalQuantity}</span>
        </div>
        <div className='flex items-center gap-2 text-gray-600'>
          <span>Total:</span>
          <span className='font-bold'>S/ {totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
