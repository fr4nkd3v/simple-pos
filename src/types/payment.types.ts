export enum EPaymentMethod {
  CASH = 'cash',
  YAPE = 'yape',
  PLIN = 'plin',
  OTHER = 'other',
}

export type TPaymentType = 'debit' | 'credit';

export type TPaymentItem = {
  amount: number;
  method: EPaymentMethod;
  type: TPaymentType;
};
