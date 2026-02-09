import { getOrderById, getProductPrice } from '@/services';
import { usePayOrderStore } from '@/stores';
import type { IOrderItem } from '@/types';
import { formatToPrice } from '@/utils';
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

  const plainItems = rounds.reduce((acc: IOrderItem[], round) => {
    return [...acc, ...round.items];
  }, []);

  const itemsAsObject = plainItems.reduce(
    (acc: Record<string, IOrderItem>, item) => {
      if (acc[item.productId]) {
        acc[item.productId].quantity += item.quantity;
      } else {
        acc[item.productId] = { ...item };
      }
      return acc;
    },
    {},
  );

  const allItems = Object.values(itemsAsObject);

  const totalPrice = allItems.reduce((sum, item) => {
    return sum + item.quantity * getProductPrice(item.productId);
  }, 0);

  return (
    <div className='flex flex-col gap-3 rounded-lg bg-[#F4F4F4] p-4 text-gray-700'>
      <p className='font-semibold'>Cuenta #{number}</p>

      <hr className='border-gray-400/50' />

      <ul>
        {itemsAsObject &&
          Object.values(itemsAsObject).map((item) => (
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
  );
};
