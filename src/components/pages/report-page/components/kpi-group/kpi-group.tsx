import { getOrders } from '@/services';
import { formatToPrice } from '@/utils';

export const KpiGroup = () => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const todaysOrders = getOrders({ scope: 'paid' }).filter((order) => {
    // TODO: Posteriormente, se debe filtrar con la fecha de inicio de caja
    const orderDate = new Date(order.createdAt).toISOString().split('T')[0];
    return orderDate === today;
  });

  const totalSales = todaysOrders.reduce((sum, order) => {
    if (order.paymentItems) {
      return (
        sum +
        order.paymentItems.reduce(
          (orderSum, payment) => orderSum + payment.amount,
          0,
        )
      );
    }
    return sum;
  }, 0);

  const totalProductsSold = todaysOrders.reduce((sum, order) => {
    return (
      sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0)
    );
  }, 0);

  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='flex flex-col items-center justify-center rounded-lg border p-4'>
        <div className='text-2xl font-bold'>{formatToPrice(totalSales)}</div>
        <div className='text-center text-sm'>Total de ventas del día</div>
      </div>
      <div className='flex flex-col items-center justify-center rounded-lg border p-4'>
        <div className='text-2xl font-bold'>{totalProductsSold}</div>
        <div className='text-center text-sm'>Productos vendidos del día</div>
      </div>
    </div>
  );
};
