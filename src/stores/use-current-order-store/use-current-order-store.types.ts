interface IOrderItem {
  productId: string;
  quantity: number;
}

export interface IUseCurrentOrderState {
  id: string | null;
  number: string | null;
  items: IOrderItem[];
  addFirstItems: (id: string, number: string, products: IOrderItem[]) => void;
  addItems: (products: IOrderItem[]) => void;
}
