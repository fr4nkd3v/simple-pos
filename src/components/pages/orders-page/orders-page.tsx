import { Header } from '@/components/shared';
import { getOrders } from '@/services';
import { OrderItem } from './components';

export const OrdersPage = () => {
  const orders = getOrders();
  const pageTitle = `Cuentas (${orders.length})`;

  return (
    <div className='flex flex-col gap-5 p-5'>
      <Header
        title={pageTitle}
        icon='receiptLi'
      />

      <ul className='flex flex-col gap-4'>
        {orders.map((order) => (
          <OrderItem
            order={order}
            key={order.id}
          />
        ))}
      </ul>
    </div>
  );
};
