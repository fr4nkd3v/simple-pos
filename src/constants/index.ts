import { EPaymentMethod } from '@/types';

export const PAYMENT_METHODS: Record<EPaymentMethod, string> = {
  [EPaymentMethod.CASH]: 'Efectivo',
  [EPaymentMethod.YAPE]: 'Yape',
  [EPaymentMethod.PLIN]: 'Plin',
  [EPaymentMethod.OTHER]: 'Otro',
} as const;

export const PAYMENT_METHOD_OPTIONS = Object.entries(PAYMENT_METHODS).map(
  ([value, label]) => ({
    label,
    value,
  }),
);
