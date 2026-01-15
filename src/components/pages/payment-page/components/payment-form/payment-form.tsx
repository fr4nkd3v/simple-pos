import { Label, RadioGroup, RadioGroupItem } from '@/components/shared';
import { AccordionItem } from '../accordion-item';
import { Accordion } from '@/components/shadcn/accordion';
import { useState } from 'react';

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
          <RadioGroup defaultValue='cash'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='cash'
                id='cash'
              />
              <Label htmlFor='cash'>Efectivo</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='yape'
                id='yape'
              />
              <Label htmlFor='yape'>Yape</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='plin'
                id='plin'
              />
              <Label htmlFor='plin'>Plin</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='other'
                id='other'
              />
              <Label htmlFor='other'>Otros</Label>
            </div>
          </RadioGroup>
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
