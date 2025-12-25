export type TMenuItemProps = {
  itemId: string;
  name: string;
  category: string;
  price: number;
  imagePath: string;
  altText: string;
  onClick: (itemId: string) => void;
  onAdd: (itemId: string) => void;
  onSubtract: (itemId: string) => void;
  currentQuantity?: number;
};
