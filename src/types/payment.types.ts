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

export interface IPaymentItem {
  amount: number;
  method: EPaymentMethod;
  type: EPaymentType;
}

export interface IPaymentItemFull extends IPaymentItem {
  enabled: boolean;
}
