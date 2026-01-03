export const CATEGORIES = ['hamburguesa', 'broaster', 'bebida'] as const;

export type TCategory = (typeof CATEGORIES)[number];

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  category: TCategory;
  price: number;
  imagePath: string;
  imageAltText: string;
}
