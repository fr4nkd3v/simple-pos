interface IOrderItem {
  productId: string;
  quantity: number;
}

export interface IUseCurrentOrderState {
  id: string | null;
  number: string | null;
  items: IOrderItem[];
  addItem: (item: IOrderItem) => void;
  clearOrder: () => void;
  addFirstItems: (id: string, number: string, products: IOrderItem[]) => void;
  addItems: (products: IOrderItem[]) => void;
}
