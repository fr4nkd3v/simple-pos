import { getProductName, getProductPrice } from '@/services';
import { formatToPrice } from '@/utils';
import type { TPaymentSummaryItemProps } from './payment-summary.types';

export const PaymentSummaryItem = ({ data }: TPaymentSummaryItemProps) => {
  return (
    <li className='flex text-sm'>
      <p className='flex flex-1 gap-1.5'>
        <span className='lining-nums tabular-nums'>x{data.quantity}</span>
        <span className='text-gray-400/60'>|</span>
        <span>{getProductName(data.productId)}</span>
      </p>

      <p>{formatToPrice(getProductPrice(data.productId) * data.quantity)}</p>
    </li>
  );
};
