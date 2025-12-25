import { capitalize, formatNumberToPrice } from '@/utils';
import type { TMenuItemProps } from './menu-item.types';
import { Badge, Button, Icon } from '@/components/shared';

export const MenuItem = ({
  itemId,
  name,
  category,
  price,
  imagePath,
  altText,
  onClick,
  onAdd,
  onSubtract,
  currentQuantity,
}: TMenuItemProps) => {
  return (
    <li>
      <div
        className='flex w-full border-b border-gray-200 py-3 text-left'
        onClick={() => onClick(itemId)}
        role='button'
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick(itemId);
          }
        }}
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

        <div className='flex gap-2'>
          {currentQuantity ? (
            <div className='flex flex-col justify-center gap-2'>
              <Button
                className='size-12 px-0'
                onClick={() => onAdd(itemId)}
              >
                <Icon
                  name='addLi'
                  className='aspect-square w-6 text-white'
                />
              </Button>
              <Button
                className='size-12 px-0'
                onClick={() => onSubtract(itemId)}
              >
                <Icon
                  name='minusLi'
                  className='aspect-square w-6 text-white'
                />
              </Button>
            </div>
          ) : null}
          <div className='relative'>
            {currentQuantity ? (
              <Badge
                variant='default'
                className='absolute -right-3 -top-3 aspect-square h-7 lining-nums tabular-nums'
              >
                {currentQuantity}
              </Badge>
            ) : null}

            <img
              className='aspect-square h-28 rounded-lg border border-gray-300'
              src={imagePath}
              alt={altText}
            />
          </div>
        </div>
      </div>
    </li>
  );
};
