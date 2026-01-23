import { Button, Icon } from '@/components/shared';
import { AccordionItem } from '../accordion-item';
import { Accordion } from '@/components/shadcn/accordion';
import { useState } from 'react';
import { PaymentItem } from './payment-item';
import { PaymentSingleControl } from './payment-single-control';

export const PaymentForm = () => {
  type TPaymentMethod = 'debit' | 'credit';
  const [paymentMethodSelected, setPaymentMethodSelected] =
    useState<TPaymentMethod>('debit');

  const isDebit = paymentMethodSelected === 'debit';
  const isCredit = paymentMethodSelected === 'credit';

  const handleDebitCheckedChange = (checked: boolean) => {
    setPaymentMethodSelected(checked ? 'debit' : 'credit');
  };
  const handleCreditCheckedChange = (checked: boolean) => {
    setPaymentMethodSelected(checked ? 'credit' : 'debit');
  };

  return (
    <Accordion
      type='single'
      className='flex w-full flex-col gap-4'
      value={paymentMethodSelected}
      onValueChange={(value) => {
        setPaymentMethodSelected(value as TPaymentMethod);
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
            <PaymentSingleControl />

            <Button
              variant='outline'
              size='lg'
            >
              <Icon
                name='addLi'
                className='mr-2 size-5'
              />
              Agregar otro medio de pago
            </Button>

            <ul className='flex flex-col gap-2'>
              <PaymentItem />
              <PaymentItem />
              <PaymentItem />
            </ul>
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
