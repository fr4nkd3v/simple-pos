import { capitalize, formatNumberToPrice } from '@/utils';
import type { TMenuItemProps } from './menu-item.types';

export const MenuItem = ({
  itemId,
  name,
  category,
  price,
  imagePath,
  altText,
  onClick,
}: TMenuItemProps) => {
  return (
    <li>
      <button
        className='flex border-b border-gray-200 py-3'
        onClick={() => onClick(itemId)}
      >
        <div className='flex-1'>
          <p className='text-xl font-semibold text-gray-700'>{name}</p>
          <p className='text-[13px] font-semibold text-gray-400'>
            {capitalize(category)}
          </p>
          <p className='text-2xl font-bold text-gray-700'>
            {formatNumberToPrice(price)}
          </p>
        </div>
        <div>
          <img
            className='aspect-square h-28 rounded-lg border border-gray-300'
            src={imagePath}
            alt={altText}
          />
        </div>
      </button>
    </li>
  );
};