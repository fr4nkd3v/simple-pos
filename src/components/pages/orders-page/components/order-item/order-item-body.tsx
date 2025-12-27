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

  const compactList = detailedItems.map((item, index) => (
    <Fragment key={item.id}>
      {index > 0 && <span> + </span>}
      <span className='font-semibold lining-nums tabular-nums'>
        {item.quantity}
      </span>{' '}
      <span>{item.name}</span>
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
      {!isExpanded && <p className='text-sm'>{compactList}</p>}

      {isExpanded && (
        <ul className='flex flex-col gap-1 text-sm'>
          {detailedItems.map((item) => (
            <li
              className='flex gap-2'
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
