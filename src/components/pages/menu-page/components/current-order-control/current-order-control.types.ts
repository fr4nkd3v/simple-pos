export type TCurrentOrderControlProps = {
  onDiscard: () => void;
  onConfirm: () => void;
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
