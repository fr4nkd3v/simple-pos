import { Button } from '@/components/shared';

export const OrderItemFooter = () => {
  return (
    <div className='flex gap-2'>
      <Button
        className='flex-1'
        variant='outline'
        size='default'
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
