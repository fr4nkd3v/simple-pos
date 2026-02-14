import { Button, Icon, Select, Input } from '@/components/shared';
import { PAYMENT_METHODS } from '@/constants';
import { usePayOrderStore } from '@/stores';
import type { EPaymentMethod } from '@/types';
import { getAvailablePaymentMethods } from '@/utils';
import type { PaymentFormItemProps } from './payment-form.types';

export const PaymentFormItem = ({
  amount,
  method,
  onDelete,
  onAmountChange,
  blockMethodChange,
}: PaymentFormItemProps) => {
  const { paymentItems, updateDebitPaymentItem } = usePayOrderStore();

  const availablePaymentMethods = [
    method,
    ...getAvailablePaymentMethods(paymentItems),
  ];

  return (
    <li className='flex gap-2'>
      <Input
        type='number'
        placeholder='0.00'
        size='lg'
        value={amount}
        onInput={(event) => {
          onAmountChange?.(Number((event.target as HTMLInputElement).value));
        }}
      />

      <Select.Root
        placeholder='Medio de pago'
        size='lg'
        value={method}
        className='w-48'
        disabled={blockMethodChange}
        onValueChange={(newMethod) =>
          updateDebitPaymentItem(method, amount, newMethod as EPaymentMethod)
        }
      >
        {availablePaymentMethods.map((availableMethod) => {
          const label = PAYMENT_METHODS[availableMethod];
          return (
            <Select.Item
              key={availableMethod}
              label={label}
              value={availableMethod}
            />
          );
        })}
      </Select.Root>

      <Button
        size='icon-lg'
        variant='secondary'
        onClick={onDelete}
      >
        <Icon
          name='trashLi'
          className='size-5'
        />
      </Button>
    </li>
  );
};
