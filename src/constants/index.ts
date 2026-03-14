import { EPaymentMethod } from '@/types';

export const DEBIT_PAYMENT_METHODS: Partial<Record<EPaymentMethod, string>> = {
  [EPaymentMethod.CASH]: 'Efectivo',
  [EPaymentMethod.YAPE]: 'Yape',
  [EPaymentMethod.PLIN]: 'Plin',
  [EPaymentMethod.OTHER]: 'Otro',
} as const;

export const CREDIT_PAYMENT_METHODS: Partial<Record<EPaymentMethod, string>> = {
  [EPaymentMethod.CREDIT]: 'Crédito',
} as const;

export const DEBIT_PAYMENT_METHOD_OPTIONS = Object.entries(
  DEBIT_PAYMENT_METHODS,
).map(([value, label]) => ({
  label,
  value,
}));

export const CREDIT_PAYMENT_METHOD_OPTIONS = Object.entries(
  CREDIT_PAYMENT_METHODS,
).map(([value, label]) => ({
  label,
  value,
}));

export const PAYMENT_METHOD_LABELS: Partial<Record<EPaymentMethod, string>> = {
  ...DEBIT_PAYMENT_METHODS,
  ...CREDIT_PAYMENT_METHODS,
};
