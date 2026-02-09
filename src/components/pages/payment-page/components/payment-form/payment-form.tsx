import { Button, Icon } from '@/components/shared';
import { AccordionItem } from '../accordion-item';
import { Accordion } from '@/components/shadcn/accordion';
import { useState } from 'react';
import { PaymentFormItem } from './payment-form-item';
import { PaymentFormSingleItem } from './payment-form-single-item';
import type { TPaymentType } from '@/types';
import { usePayOrderStore } from '@/stores';

export const PaymentForm = () => {
  const [paymentTypeSelected, setPaymentTypeSelected] =
    useState<TPaymentType>('debit');

  const {
    paymentItems,
    addDebitPaymentItem,
    changeUniquePaymentItemMethod,
    updateDebitPaymentItem,
    deleteDebitPaymentItem,
  } = usePayOrderStore();
  if (!paymentItems.length) return null;

  const firstPaymentMethod = paymentItems[0].method;

  const debitPaymentItems = paymentItems.filter(
    (item) => item.type === 'debit',
  );
  const creditPaymentItems = paymentItems.filter(
    (item) => item.type === 'credit',
  );

  const isDebit = debitPaymentItems.length > 0;
  const isCredit = creditPaymentItems.length > 0;

  const handleDebitCheckedChange = (checked: boolean) => {
    setPaymentTypeSelected(checked ? 'debit' : 'credit');
  };
  const handleCreditCheckedChange = (checked: boolean) => {
    setPaymentTypeSelected(checked ? 'credit' : 'debit');
  };

  return (
    <Accordion
      type='single'
      className='flex w-full flex-col gap-4'
      value={paymentTypeSelected}
      onValueChange={(value) => {
        setPaymentTypeSelected(value as TPaymentType);
      }}
    >
      <AccordionItem.Root
        value='debit'
        checked={isDebit}
      >
        <AccordionItem.Header
          checked={isDebit}
          onCheckedChange={handleDebitCheckedChange}
          title='Paga con:'
        />
        <AccordionItem.Content>
          <div className='flex flex-col gap-7'>
            {isDebit && debitPaymentItems.length === 1 ? (
              <PaymentFormSingleItem
                onValueChange={changeUniquePaymentItemMethod}
                defaultValue={firstPaymentMethod}
              />
            ) : (
              <ul className='flex flex-col gap-2'>
                {debitPaymentItems.map((item, index) => (
                  <PaymentFormItem
                    key={item.method}
                    method={item.method}
                    amount={item.amount}
                    onDelete={() => deleteDebitPaymentItem(item.method)}
                    onAmountChange={(amount) =>
                      updateDebitPaymentItem(item.method, amount)
                    }
                    blockMethodChange={index + 1 !== debitPaymentItems.length}
                  />
                ))}
              </ul>
            )}

            <Button
              variant='outline'
              size='lg'
              onClick={addDebitPaymentItem}
            >
              <Icon
                name='addLi'
                className='mr-2 size-5'
              />
              Agregar otro medio de pago
            </Button>
          </div>
        </AccordionItem.Content>
      </AccordionItem.Root>

      <AccordionItem.Root
        value='credit'
        checked={isCredit}
      >
        <AccordionItem.Header
          checked={isCredit}
          onCheckedChange={handleCreditCheckedChange}
          title='Credito de:'
        />
        <AccordionItem.Content>
          <p>Contenido de acordeon de credito</p>
        </AccordionItem.Content>
      </AccordionItem.Root>
    </Accordion>
  );
};
