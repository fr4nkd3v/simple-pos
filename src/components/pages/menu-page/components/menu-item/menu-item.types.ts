export type TMenuItemProps = {
  itemId: string;
  name: string;
  category: string;
  price: number;
  imagePath: string;
  altText: string;
  onClick: (itemId: string) => void;
}; 