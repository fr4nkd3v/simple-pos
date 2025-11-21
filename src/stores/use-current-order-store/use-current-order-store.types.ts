interface IOrderItem {
  productId: string;
  quantity: number;
}

export interface IUseCurrentOrderState {
  id: string | null;
  number: string | null;
  products: IOrderItem[];
  addFirstProducts: (
    id: string,
    number: string,
    products: IOrderItem[],
  ) => void;
  addProducts: (products: IOrderItem[]) => void;
}
