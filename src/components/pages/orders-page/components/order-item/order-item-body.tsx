import { Icon } from '@/components/shared';
import { Fragment } from 'react/jsx-runtime';
import { useOrderContext } from './order-item.context';
import { getProductDetail } from '@/services';
import { useMemo } from 'react';

export const OrderItemBody = () => {
  const { order, isExpanded } = useOrderContext();

  const detailedItems = useMemo(() => {
    return order.items
      .map((item) => {
        const product = getProductDetail(item.productId);
        if (!product) return null;

        return { ...product, quantity: item.quantity };
      })
      .filter((item) => item !== null);
  }, [order.items]);

  const detailedRounds = useMemo(() => {
    return order.rounds.map((round) => {
      return round
        .map((item) => {
          const product = getProductDetail(item.productId);
          if (!product) return null;

          return { ...product, quantity: item.quantity };
        })
        .filter((item) => item !== null);
    });
  }, [order.rounds]);

  const compactRoundList = detailedRounds.map((round, index) => (
    <Fragment key={index}>
      <p className='font-semibold text-gray-500'>Ronda {index + 1}:</p>
      {round.map((item, index) => (
        <Fragment key={item.id}>
          {index > 0 && <span> + </span>}
          <span className='font-semibold lining-nums tabular-nums'>
            {item.quantity}
          </span>{' '}
          <span>{item.name}</span>
        </Fragment>
      ))}
    </Fragment>
  ));

  const totalQuantity = detailedItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  const totalPrice = detailedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      {!isExpanded && <div className='text-sm'>{compactRoundList}</div>}

      {isExpanded && (
        <ol className='rounded-lg border border-gray-200'>
          {detailedRounds.map((round, index) => (
            <li
              key={index}
              className='flex flex-col gap-2 pb-3'
            >
              <div className='bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500'>
                Ronda {index + 1}
              </div>
              <ul>
                {round.map((item) => (
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

                    <p>S/ {item.price.toFixed(2)}</p>
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
