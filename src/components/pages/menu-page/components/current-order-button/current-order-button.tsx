import { Icon } from '@/components/shared';
import type { TCurrentOrderButtonProps } from './current-order-button.types';

export const CurrentOrderButton = ({
  orderNumber,
  countItems,
}: TCurrentOrderButtonProps) => {
  return (
    <button className='flex h-[52px] w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-6 text-base font-medium text-gray-700 shadow-[0_0_20px_0_rgba(0,0,0,.1),_0_10px_20px_0_rgba(0,0,0,.1)]'>
      <div className='flex items-center gap-1'>
        <Icon
          name='receiptEditLi'
          className='aspect-square h-5'
        />
        <span>Cuenta #{orderNumber}</span>
      </div>
      <div className='flex items-center gap-1'>
        <Icon
          name='bowlLi'
          className='aspect-square h-5'
        />
        <span>{countItems}</span>
      </div>
    </button>
  );
};
