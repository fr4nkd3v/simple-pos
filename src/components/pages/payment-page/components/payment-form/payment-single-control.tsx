import { RadioButton, type TIconName } from '@/components/shared';
import type { TPaymentMethod } from '@/types';

type TPaymentOption = {
  value: TPaymentMethod;
  icon: TIconName;
  label?: string;
};

const data: TPaymentOption[] = [
  { value: 'cash', icon: 'dollarCircleLi', label: 'Efectivo' },
  { value: 'yape', icon: 'yapeLi' },
  { value: 'plin', icon: 'plinLi' },
  { value: 'other', icon: 'walletMoneyLi', label: 'Otro' },
];

export const PaymentSingleControl = () => {
  return (
    <RadioButton.Group defaultValue='cash'>
      {data.map(({ value, icon, label }) => (
        <RadioButton.Item
          key={value}
          id={value}
          value={value}
          label={label}
        >
          <RadioButton.ItemIcon
            icon={icon}
            className={value === 'yape' || value === 'plin' ? 'size-14' : ''}
          />
        </RadioButton.Item>
      ))}

      {/* <RadioButton.Item
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
      </RadioButton.Item> */}
    </RadioButton.Group>
  );
};
