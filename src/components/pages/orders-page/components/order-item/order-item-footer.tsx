import { Button } from '@/components/shared';
import { useOrderContext } from './order-item.context';
import { useCurrentOrderStore } from '@/stores';

export const OrderItemFooter = () => {
  const { order } = useOrderContext();
  const { setExistingOrderAndNewRound } = useCurrentOrderStore();

  const handleEdit = () => {
    const { id, number, items, rounds } = order;
    setExistingOrderAndNewRound({ id, number, items, rounds });

    // TODO: Go to menu page
  };

  return (
    <div className='flex gap-2'>
      <Button
        className='flex-1'
        variant='outline'
        size='default'
        onClick={handleEdit}
      >
        Editar
      </Button>
      <Button
        className='flex-1'
        size='default'
      >
        Pagar
      </Button>
    </div>
  );
};
