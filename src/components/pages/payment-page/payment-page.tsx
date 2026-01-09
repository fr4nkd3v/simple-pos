import { Button, Header, Icon } from '@/components/shared';
import { AccordionItem, PaymentSummary } from './components';
import { Accordion } from '@/components/shadcn/accordion';

import { useState } from 'react';

export const PaymentPage = () => {
  const pageTitle = `Pagar cuenta`;

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
    <div className='flex flex-col gap-5 p-5'>
      <Header
        title={pageTitle}
        icon='walletMoneyLi'
      />
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <p className='font-semibold'>1. Precuenta</p>

          <PaymentSummary />

          <div className='flex gap-2'>
            <Button
              className='flex-1'
              size='lg'
            >
              <Icon
                name='shareLi'
                className='aspect-square w-5'
              />
              Compartir
            </Button>
            <Button
              className='flex-1'
              variant='outline'
              size='lg'
            >
              <Icon
                name='copyLi'
                className='aspect-square w-5'
              />
              Copiar
            </Button>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-semibold'>2. Elige cómo cancela el cliente</p>

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
                <p>Contenido de acordeon de debito</p>
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
        </div>
      </div>
    </div>
  );
};
