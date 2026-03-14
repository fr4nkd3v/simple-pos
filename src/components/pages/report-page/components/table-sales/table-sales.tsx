import { getOrders } from '@/services';
import { PAYMENT_METHOD_LABELS } from '@/constants';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn';
import { formatToPrice } from '@/utils';

export const TableSales: React.FC = () => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const todaysOrders = getOrders({ scope: 'paid' }).filter((order) => {
    // TODO: Posteriormente, se debe filtrar con la fecha de inicio de caja
    const orderDate = new Date(order.createdAt).toISOString().split('T')[0];
    return orderDate === today;
  });

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getOrderTotal = (order: (typeof todaysOrders)[0]) => {
    if (order.paymentItems) {
      return order.paymentItems.reduce(
        (sum, payment) => sum + payment.amount,
        0,
      );
    }
    return 0;
  };

  const getPaymentMethod = (order: (typeof todaysOrders)[0]) => {
    if (!order.paymentItems || order.paymentItems.length === 0) return 'N/A';

    const methods = order.paymentItems.map((payment) => {
      return PAYMENT_METHOD_LABELS[payment.method] ?? 'Desconocido';
    });

    return [...new Set(methods)].join(', ');
  };

  return (
    <div className='w-full overflow-x-auto rounded-lg border'>
      <div className='p-6'>
        <h3 className='text-lg font-semibold'>Registros de Ventas del Día</h3>
      </div>
      <div className='w-full'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>N°</TableHead>
              <TableHead>Hora</TableHead>
              <TableHead>Método de Pago</TableHead>
              <TableHead className='text-right'>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todaysOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className='font-medium'>#{order.number}</TableCell>
                <TableCell>{formatTime(order.createdAt)}</TableCell>
                <TableCell>{getPaymentMethod(order)}</TableCell>
                <TableCell className='text-right'>
                  {formatToPrice(getOrderTotal(order))}
                </TableCell>
              </TableRow>
            ))}
            {todaysOrders.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className='text-muted-foreground text-center'
                >
                  No hay ventas registradas hoy
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
