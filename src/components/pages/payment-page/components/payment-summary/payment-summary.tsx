import { formatToPrice } from '@/utils';

const PaymentSummaryItem = () => {
  return (
    <li className='flex text-sm'>
      <p className='flex flex-1 gap-1.5'>
        <span className='lining-nums tabular-nums'>x{'1'}</span>
        <span className='text-gray-400/60'>|</span>
        <span>{'Pecho'}</span>
      </p>

      <p>{formatToPrice(99)}</p>
    </li>
  );
};

export const PaymentSummary = () => {
  return (
    <div className='flex flex-col gap-3 rounded-lg bg-[#F4F4F4] p-4 text-gray-700'>
      <p className='font-semibold'>Cuenta #99</p>

      <hr className='border-gray-400/50' />

      <ul>
        <PaymentSummaryItem />
        <PaymentSummaryItem />
        <PaymentSummaryItem />
      </ul>

      <hr className='border-gray-400/50' />

      <div className='flex items-center justify-between font-semibold'>
        <span>Total:</span>
        <span>{formatToPrice(999)}</span>
      </div>
    </div>
  );
};
