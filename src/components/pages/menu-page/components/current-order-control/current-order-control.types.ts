export type TCurrentOrderControlProps = {
  orderNumber: number;
  countItems: number;
};

export type TCurrentOrderItemProps = {
  itemId: string;
  quantity: number;
  productName: string;
  price: number;
  imagePath: string;
  imageAltText: string;
  onAdd: (itemId: string) => void;
  onSubtract: (itemId: string) => void;
  onDelete: (itemId: string) => void;
};
