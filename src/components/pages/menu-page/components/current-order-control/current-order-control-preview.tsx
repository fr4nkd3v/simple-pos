import { Icon } from '@/components/shared';
import { useCurrentOrderDetail } from '@/hooks';
import { classNames, formatToPrice } from '@/utils';
import type { TCurrentOrderControlPreviewProps } from './current-order-control.types';

export const CurrentOrderControlPreview = ({
  className,
}: TCurrentOrderControlPreviewProps) => {
  const { orderNumberLabel, itemsCount, totalPrice } = useCurrentOrderDetail();

  return (
    <div
      className={classNames(
        className,
        'flex w-full items-center justify-between text-base font-medium text-gray-700',
      )}
    >
      <div className='flex items-center gap-1'>
        <Icon
          name='receiptEditLi'
          className='aspect-square h-5'
        />
        <span>{orderNumberLabel}</span>
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-1'>
          <Icon
            name='bowlLi'
            className='aspect-square h-5 text-gray-500'
          />
          <span className='font-semibold lining-nums tabular-nums'>
            {itemsCount}
          </span>
        </div>
        <div className='flex items-center gap-1'>
          <Icon
            name='penLi'
            className='aspect-square h-5 text-gray-500'
          />
          <span className='font-semibold'>
            {formatToPrice(totalPrice, {
              showSymbol: false,
              forceDecimals: false,
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
