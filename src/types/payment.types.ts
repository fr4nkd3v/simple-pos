export type TPaymentMethod = 'cash' | 'yape' | 'plin' | 'other';

export type TPaymentType = 'debit' | 'credit';

export type TPaymentItem = {
  amount: number;
  method?: TPaymentMethod;
  type: TPaymentType;
};
