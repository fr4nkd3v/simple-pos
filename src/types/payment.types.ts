export enum EPaymentMethod {
  CASH = 'cash',
  YAPE = 'yape',
  PLIN = 'plin',
  OTHER = 'other',
  CREDIT = 'credit',
}

export enum EPaymentType {
  DEBIT = 'debit',
  CREDIT = 'credit',
}

export type TPaymentItem = {
  amount: number;
  method: EPaymentMethod;
  type: EPaymentType;
};
