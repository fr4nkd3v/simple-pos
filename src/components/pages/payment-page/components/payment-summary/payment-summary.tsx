import { Button, Icon } from '@/components/shared';
import { getOrderById } from '@/services';
import { usePayOrderStore } from '@/stores';
import { formatToPrice, getOrderTotalPrice, getPlainOrderItems } from '@/utils';
import { PaymentSummaryItem } from './payment-summary-item';

export const PaymentSummary = () => {
  const { id } = usePayOrderStore();
  if (!id) return null;

  const foundOrder = getOrderById(id);
  if (!foundOrder) {
    console.error('Order not found in local storage');
    return null;
  }

  const { number, rounds } = foundOrder;

  const plainOrderItems = getPlainOrderItems(rounds);
  const totalPrice = getOrderTotalPrice(plainOrderItems);

  return (
    <>
      <div className='flex flex-col gap-3 rounded-lg bg-[#F4F4F4] p-4 text-gray-700'>
        <p className='font-semibold'>Cuenta #{number}</p>

        <hr className='border-gray-400/50' />

        <ul>
          {plainOrderItems.map((item) => (
            <PaymentSummaryItem
              key={item.productId}
              data={item}
            />
          ))}
        </ul>

        <hr className='border-gray-400/50' />

        <div className='flex items-center justify-between font-semibold'>
          <span>Total:</span>
          <span>{formatToPrice(totalPrice)}</span>
        </div>
      </div>
      <div className='flex gap-2'>
        <Button
          className='flex-1'
          size='lg'
        >
          <Icon
            name='shareLi'
            className='aspect-square w-5'
          />
          Compartir
        </Button>
        <Button
          className='flex-1'
          variant='outline'
          size='lg'
        >
          <Icon
            name='copyLi'
            className='aspect-square w-5'
          />
          Copiar
        </Button>
      </div>
    </>
  );
};
