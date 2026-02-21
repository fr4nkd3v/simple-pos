import { EPaymentMethod } from '@/types';

export const DEBIT_PAYMENT_METHODS: Partial<Record<EPaymentMethod, string>> = {
  [EPaymentMethod.CASH]: 'Efectivo',
  [EPaymentMethod.YAPE]: 'Yape',
  [EPaymentMethod.PLIN]: 'Plin',
  [EPaymentMethod.OTHER]: 'Otro',
} as const;

export const DEBIT_PAYMENT_METHOD_OPTIONS = Object.entries(
  DEBIT_PAYMENT_METHODS,
).map(([value, label]) => ({
  label,
  value,
}));
