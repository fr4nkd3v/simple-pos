import type { TPaymentMethod } from '@/types';

export const PAYMENT_METHODS: Record<TPaymentMethod, string> = {
  cash: 'Efectivo',
  yape: 'Yape',
  plin: 'Plin',
  other: 'Otro',
} as const;

export const PAYMENT_METHOD_OPTIONS = Object.entries(PAYMENT_METHODS).map(
  ([value, label]) => ({
    label,
    value,
  }),
);
