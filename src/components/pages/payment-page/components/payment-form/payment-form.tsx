import { Button, Icon } from '@/components/shared';
import { AccordionItem } from '../accordion-item';
import { Accordion } from '@/components/shadcn/accordion';
import { useState } from 'react';
import { PaymentFormItem } from './payment-form-item';
import { PaymentFormSingleItem } from './payment-form-single-item';
import { EPaymentType } from '@/types';
import { usePayOrderStore } from '@/stores';

export const PaymentForm = () => {
  const [paymentTypeSelected, setPaymentTypeSelected] = useState<EPaymentType>(
    EPaymentType.DEBIT,
  );

  const {
    paymentItems,
    addDebitPaymentItem,
    changeUniquePaymentItemMethod,
    updateDebitPaymentItem,
    deleteDebitPaymentItem,
  } = usePayOrderStore();
  if (!paymentItems.length) return null;

  const debitPaymentItems = paymentItems.filter(
    (item) => item.type === EPaymentType.DEBIT,
  );
  const creditPaymentItems = paymentItems.filter(
    (item) => item.type === EPaymentType.CREDIT,
  );

  const hasOnlyOneDebitPaymentItem = debitPaymentItems.length === 1;
  const firstDebitPaymentMethod = debitPaymentItems[0].method;

  const isDebit = debitPaymentItems.length > 0;
  const isCredit = creditPaymentItems.length > 0;

  const handleDebitCheckedChange = (checked: boolean) => {
    setPaymentTypeSelected(checked ? EPaymentType.DEBIT : EPaymentType.CREDIT);
  };
  const handleCreditCheckedChange = (checked: boolean) => {
    setPaymentTypeSelected(checked ? EPaymentType.CREDIT : EPaymentType.DEBIT);
  };

  const handleAddDebitPaymentItem = () => {
    if (hasOnlyOneDebitPaymentItem) {
      updateDebitPaymentItem(debitPaymentItems[0].method, 0);
    }
    addDebitPaymentItem(0);
  };

  return (
    <Accordion
      type='single'
      className='flex w-full flex-col gap-4'
      value={paymentTypeSelected}
      onValueChange={(value) => {
        setPaymentTypeSelected(value as EPaymentType);
      }}
    >
      <AccordionItem.Root
        value={EPaymentType.DEBIT}
        checked={isDebit}
      >
        <AccordionItem.Header
          checked={isDebit}
          onCheckedChange={handleDebitCheckedChange}
          title='Paga con:'
        />
        <AccordionItem.Content>
          <div className='flex flex-col gap-7'>
            {isDebit && hasOnlyOneDebitPaymentItem ? (
              <PaymentFormSingleItem
                onValueChange={changeUniquePaymentItemMethod}
                defaultValue={firstDebitPaymentMethod}
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
              onClick={handleAddDebitPaymentItem}
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
        value={EPaymentType.CREDIT}
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
