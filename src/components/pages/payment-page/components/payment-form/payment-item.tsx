import { Input } from '@/components/shadcn/input';
import { Button, Icon, Select } from '@/components/shared';
import { PAYMENT_METHOD_OPTIONS } from '@/constants';

export const PaymentItem = () => {
  return (
    <li className='flex gap-2'>
      <Input
        type='number'
        placeholder='0.00'
        size='lg'
      />

      <Select.Root
        placeholder='Medio de pago'
        size='lg'
      >
        {PAYMENT_METHOD_OPTIONS.map(({ label, value }) => (
          <Select.Item
            key={value}
            label={label}
            value={value}
          />
        ))}
      </Select.Root>

      <Button
        size='icon-lg'
        variant='secondary'
      >
        <Icon
          name='trashLi'
          className='size-5'
        />
      </Button>
    </li>
  );
};
