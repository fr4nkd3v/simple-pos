import { Button, Icon } from '@/components/shared';
import { useOrderContext } from './order-item.context';
import { useCurrentOrderStore } from '@/stores';
import { usePageStore } from '@/stores/use-page/use-page';
import { EPage } from '@/types';

export const OrderItemFooter = () => {
  const { order } = useOrderContext();
  const { setExistingOrderAndNewRound } = useCurrentOrderStore();
  const { setPage } = usePageStore();

  const handleEdit = () => {
    const { id, number, items, rounds } = order;
    setExistingOrderAndNewRound({ id, number, items, rounds });

    setPage(EPage.MENU_PAGE);
  };

  const handlePay = () => {
    // const { id, number, items, rounds } = order;

    setPage(EPage.PAYMENT_PAGE);
  };

  return (
    <div className='flex gap-2'>
      <Button
        className='flex-1'
        variant='outline'
        size='lg'
        onClick={handleEdit}
      >
        <Icon
          name='editLi'
          className='aspect-square w-5'
        />
        Editar
      </Button>
      <Button
        className='flex-1'
        size='lg'
        onClick={handlePay}
      >
        <Icon
          name='walletMoneyLi'
          className='aspect-square w-5'
        />
        Pagar
      </Button>
    </div>
  );
};
