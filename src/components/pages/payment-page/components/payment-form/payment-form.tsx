import { Button, Icon, RadioButton } from '@/components/shared';
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
          <div className='flex flex-col gap-7'>
            <RadioButton.Group defaultValue='cash'>
              <RadioButton.Item
                id='cash'
                value='cash'
                label='Efectivo'
              >
                <RadioButton.ItemIcon icon='dollarCircleLi' />
              </RadioButton.Item>

              <RadioButton.Item
                id='yape'
                value='yape'
              >
                <RadioButton.ItemIcon
                  icon='yapeLi'
                  className='size-14'
                />
              </RadioButton.Item>

              <RadioButton.Item
                id='plin'
                value='plin'
              >
                <RadioButton.ItemIcon
                  icon='plinLi'
                  className='size-14'
                />
              </RadioButton.Item>

              <RadioButton.Item
                id='other'
                value='other'
                label='Otro'
              >
                <RadioButton.ItemIcon icon='walletMoneyLi' />
              </RadioButton.Item>
            </RadioButton.Group>

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
