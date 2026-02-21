import { Button, Icon, Input } from '@/components/shared';
import { AccordionItem } from '../accordion-item';
import { AccordionGroup } from '@/components/shadcn/accordion';
import { useState } from 'react';
import { PaymentFormItem } from './payment-form-item';
import { PaymentFormSingleItem } from './payment-form-single-item';
import { EPaymentType } from '@/types';
import { usePayOrderStore } from '@/stores';

export const PaymentForm = () => {
  const [isDebitSelected, setIsDebitSelected] = useState(true);
  const [isCreditSelected, setIsCreditSelected] = useState(false);

  const [openedAccordions, setOpenedAccordions] = useState<EPaymentType[]>([
    EPaymentType.DEBIT,
  ]);

  const {
    paymentItems,
    addDebitPaymentItem,
    changeUniquePaymentItemMethod,
    updateDebitPaymentItem,
    deleteDebitPaymentItem,
    saveCreditPaymentItem,
    disableDebitPayments,
    enableDebitPayments,
    disableCreditPayment,
    enableCreditPayment,
  } = usePayOrderStore();
  if (!paymentItems.length) return null;

  const debitPaymentItems = paymentItems.filter(
    (item) => item.type === EPaymentType.DEBIT,
  );
  const creditPaymentItem = paymentItems.filter(
    (item) => item.type === EPaymentType.CREDIT,
  )[0];

  const hasOnlyOneDebitPaymentItem = debitPaymentItems.length === 1;
  const firstDebitPaymentMethod = debitPaymentItems[0].method;

  const handleDebitCheckedChange = (checked: boolean) => {
    if (!checked) {
      disableDebitPayments();
      setOpenedAccordions((previous) =>
        previous.filter((value) => value !== EPaymentType.DEBIT),
      );
    }

    if (checked) {
      enableDebitPayments();
      if (!openedAccordions.includes(EPaymentType.DEBIT)) {
        setOpenedAccordions((previous) => [...previous, EPaymentType.DEBIT]);
      }
    }
    setIsDebitSelected(checked);
  };

  const handleCreditCheckedChange = (checked: boolean) => {
    if (!checked) {
      disableCreditPayment();
      setOpenedAccordions((previous) =>
        previous.filter((value) => value !== EPaymentType.CREDIT),
      );
    }

    if (checked) {
      if (!openedAccordions.includes(EPaymentType.CREDIT)) {
        setOpenedAccordions((previous) => [...previous, EPaymentType.CREDIT]);
      }

      saveCreditPaymentItem(0);
      enableCreditPayment();
    }

    setIsCreditSelected(checked);
  };

  const handleAddDebitPaymentItem = () => {
    if (hasOnlyOneDebitPaymentItem) {
      updateDebitPaymentItem(debitPaymentItems[0].method, 0);
    }
    addDebitPaymentItem(0);
  };

  return (
    <AccordionGroup
      type='multiple'
      className='flex w-full flex-col gap-4'
      value={openedAccordions}
      onValueChange={(accordionValues) => {
        const valuesFirstFiltered = !isCreditSelected
          ? accordionValues.filter((value) => value !== EPaymentType.CREDIT)
          : accordionValues;

        const valuesSecondFiltered = !isDebitSelected
          ? valuesFirstFiltered.filter((value) => value !== EPaymentType.DEBIT)
          : valuesFirstFiltered;

        setOpenedAccordions(valuesSecondFiltered as EPaymentType[]);
      }}
    >
      <AccordionItem.Root
        value={EPaymentType.DEBIT}
        checked={isDebitSelected}
      >
        <AccordionItem.Header
          checked={isDebitSelected}
          onCheckedChange={handleDebitCheckedChange}
          title='Paga con:'
        />
        <AccordionItem.Content>
          <div className='flex flex-col gap-7'>
            {hasOnlyOneDebitPaymentItem ? (
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
        checked={isCreditSelected}
      >
        <AccordionItem.Header
          checked={isCreditSelected}
          title='Credito de:'
          onCheckedChange={handleCreditCheckedChange}
        />
        <AccordionItem.Content>
          <div className='flex items-center gap-2'>
            <Input
              type='number'
              placeholder='0.00'
              size='lg'
              value={creditPaymentItem?.amount}
              onInput={(event) => {
                saveCreditPaymentItem(
                  Number((event.target as HTMLInputElement).value),
                );
              }}
            />

            <Button size='md'>Cubrir restante</Button>
          </div>
        </AccordionItem.Content>
      </AccordionItem.Root>
    </AccordionGroup>
  );
};
