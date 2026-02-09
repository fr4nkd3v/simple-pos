import { EPaymentMethod } from '@/types';
import { type TIconName } from '@/components/shared';

export type PaymentFormItemProps = {
  method: EPaymentMethod;
  amount: number;
  onDelete?: () => void;
  onAmountChange?: (amount: number) => void;
  blockMethodChange?: boolean;
};

export type PaymentFormSingleItemProps = {
  defaultValue?: EPaymentMethod;
  onValueChange?: (method: EPaymentMethod) => void;
};

type TSinglePaymentOption = {
  value: EPaymentMethod;
  icon: TIconName;
  label?: string;
};

export const singlePaymentItems: TSinglePaymentOption[] = [
  { value: EPaymentMethod.CASH, icon: 'dollarCircleLi', label: 'Efectivo' },
  { value: EPaymentMethod.YAPE, icon: 'yapeLi' },
  { value: EPaymentMethod.PLIN, icon: 'plinLi' },
  { value: EPaymentMethod.OTHER, icon: 'walletMoneyLi', label: 'Otro' },
];
