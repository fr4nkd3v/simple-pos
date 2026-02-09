import { RadioButton } from '@/components/shared';
import { EPaymentMethod } from '@/types';
import {
  singlePaymentItems,
  type PaymentFormSingleItemProps,
} from './payment-form.types';

export const PaymentFormSingleItem = ({
  defaultValue,
  onValueChange,
}: PaymentFormSingleItemProps) => {
  return (
    <RadioButton.Group
      defaultValue={defaultValue as string}
      onValueChange={
        onValueChange
          ? (value) => onValueChange(value as EPaymentMethod)
          : undefined
      }
    >
      {singlePaymentItems.map(({ value, icon, label }) => {
        const isYapeOrPlin =
          value === EPaymentMethod.YAPE || value === EPaymentMethod.PLIN;

        return (
          <RadioButton.Item
            key={value}
            id={value}
            value={value}
            label={label}
          >
            <RadioButton.ItemIcon
              icon={icon}
              className={isYapeOrPlin ? 'size-14' : ''}
            />
          </RadioButton.Item>
        );
      })}
    </RadioButton.Group>
  );
};
