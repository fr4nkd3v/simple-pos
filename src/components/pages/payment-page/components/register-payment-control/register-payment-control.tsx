import { Alert, Button, Icon } from '@/components/shared';
import { getOrderById } from '@/services';
import { usePayOrderStore } from '@/stores';
import { EPaymentType } from '@/types';
import { formatToPrice, getOrderTotalPrice, getPlainOrderItems } from '@/utils';

export const RegisterPaymentControl = () => {
  const { paymentItems, id } = usePayOrderStore();
  if (!id) return null;

  const foundOrder = getOrderById(id);
  if (!foundOrder) {
    console.error('Order not found in local storage');
    return null;
  }

  const { rounds } = foundOrder;
  const plainOrderItems = getPlainOrderItems(rounds);
  const orderTotalPrice = getOrderTotalPrice(plainOrderItems);

  const sumPaymentItems = paymentItems.reduce(
    (sum, item) => sum + (item.enabled ? item.amount : 0),
    0,
  );

  const isAllCovered = sumPaymentItems === orderTotalPrice;

  const debitPaymentItems = paymentItems.filter(
    (item) => item.type === EPaymentType.DEBIT && item.enabled,
  );
  const creditPaymentItems = paymentItems.filter(
    (item) => item.type === EPaymentType.CREDIT && item.enabled,
  );

  return (
    <div className='flex w-full flex-col gap-3 rounded-t-xl border border-gray-200 bg-white px-5 py-6 shadow-card'>
      <Alert.Root type={isAllCovered ? 'success' : 'error'}>
        <Alert.Message
          message={
            isAllCovered
              ? 'Cuenta totalmente cubierta:'
              : 'La cuenta no está totalmente cubierta:'
          }
        >
          <Alert.Icon />
        </Alert.Message>

        <Alert.List>
          {debitPaymentItems.map((item) => (
            <Alert.ListItem key={item.type + item.method}>
              <Icon
                name='tickSquareBo'
                className='size-5'
              />
              <p>
                Paga{' '}
                <span className='font-bold'>{formatToPrice(item.amount)}</span>{' '}
                con <span className='font-bold'>{item.method}</span>
              </p>
            </Alert.ListItem>
          ))}

          {creditPaymentItems.map((item) => (
            <Alert.ListItem key={item.type}>
              <Icon
                name='tickSquareBo'
                className='size-5'
              />
              <p>
                <span className='font-bold'>Credito</span> de{' '}
                <span className='font-bold'>{formatToPrice(item.amount)}</span>
              </p>
            </Alert.ListItem>
          ))}

          {!isAllCovered && (
            <Alert.ListItem>
              <Icon
                name='infoSquareBo'
                className='size-5 text-red-500'
              />
              <p>
                Falta cubrir{' '}
                <span className='font-bold'>
                  {formatToPrice(orderTotalPrice - sumPaymentItems)}
                </span>
              </p>
            </Alert.ListItem>
          )}
        </Alert.List>
      </Alert.Root>

      <Button size='lg'>
        <Icon
          name='walletMoneyLi'
          className='aspect-square w-5'
        />
        Registrar pago
      </Button>
    </div>
  );
};
