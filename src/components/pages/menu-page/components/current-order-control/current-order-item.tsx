import { Icon } from '@/components/shared';
import type { TCurrentOrderItemProps } from './current-order-control.types';
import { formatToPrice } from '@/utils';

export const CurrentOrderItem = ({
  itemId,
  quantity,
  productName,
  price,
  imagePath,
  imageAltText,
  onAdd,
  onSubtract,
  onDelete,
}: TCurrentOrderItemProps) => {
  return (
    <li className='flex justify-between py-2 text-gray-700'>
      <div className='flex items-center gap-3'>
        <div className='flex w-fit shrink-0 items-center overflow-hidden rounded-e-lg bg-gray-200'>
          <button
            className='flex aspect-square w-10 shrink-0 items-center justify-center bg-gray-200'
            onClick={() => onSubtract(itemId)}
          >
            <Icon
              name='minusLi'
              className='aspect-square w-6 text-gray-800'
            />
          </button>
          <div className='h-5 w-[1px] bg-gray-300'></div>
          <button
            className='flex aspect-square w-10 shrink-0 items-center justify-center bg-gray-200'
            onClick={() => onAdd(itemId)}
          >
            <Icon
              name='addLi'
              className='aspect-square w-6 text-gray-800'
            />
          </button>
        </div>

        <p className='w-6 text-center font-semibold lining-nums tabular-nums'>
          {quantity}
        </p>

        <img
          src={imagePath}
          alt={imageAltText}
          className='aspect-square w-10 rounded-[4PX] border border-gray-300'
        />

        <span className='text-sm'>{productName}</span>
      </div>

      <div className='flex items-center gap-4'>
        <span>{formatToPrice(price)}</span>

        <div className='flex w-fit shrink-0 items-center overflow-hidden rounded-s-lg bg-gray-200'>
          <button
            className='flex aspect-square w-10 shrink-0 items-center justify-center bg-gray-200'
            onClick={() => onDelete(itemId)}
          >
            <Icon
              name='trashLi'
              className='aspect-square w-6 text-gray-800'
            />
          </button>
        </div>
      </div>
    </li>
  );
};
