import { Button, Icon, Select, Input } from '@/components/shared';
import { DEBIT_PAYMENT_METHODS } from '@/constants';
import { usePayOrderStore } from '@/stores';
import type { EPaymentMethod } from '@/types';
import { getAvailableDebitPaymentMethods } from '@/utils';
import type { PaymentFormItemProps } from './payment-form.types';

export const PaymentFormItem = ({
  amount,
  method,
  onDelete,
  onAmountChange,
  blockMethodChange,
}: PaymentFormItemProps) => {
  const { paymentItems, updateDebitPaymentItem } = usePayOrderStore();

  const availableDebitPaymentMethods = [
    method,
    ...getAvailableDebitPaymentMethods(paymentItems),
  ];

  const filteredAvailableDebitPaymentMethods = availableDebitPaymentMethods
    .map((availableMethod) =>
      DEBIT_PAYMENT_METHODS[availableMethod]
        ? {
            label: DEBIT_PAYMENT_METHODS[availableMethod],
            value: availableMethod,
          }
        : null,
    )
    .filter((availableMethod) => availableMethod !== null);

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
        {filteredAvailableDebitPaymentMethods.map((availableMethod) => {
          return (
            <Select.Item
              key={availableMethod.value}
              label={availableMethod.label}
              value={availableMethod.value}
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
