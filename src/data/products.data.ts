import type { TCategory } from './categories.data';

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  category: TCategory;
  price: number;
  imagePath: string;
  imageAltText: string;
}

export const productsData: IProduct[] = [
  {
    id: '3e535d31-e2ac-46e7-b61f-12e55301f02b',
    name: 'Clásica Carne',
    category: 'hamburguesa',
    price: 6,
    imagePath: './images/temporal-product.jpg',
    imageAltText: 'alt text',
  },
  {
    id: 'ecbfdea4-8e2d-4435-8df2-b69d4ca9bcd3',
    name: 'Clásica Pollo',
    category: 'hamburguesa',
    price: 6,
    imagePath: './images/temporal-product.jpg',
    imageAltText: 'alt text',
  },
  {
    id: '418b3c51-ca4e-48b8-ae95-e3e5a546c20a',
    name: 'Chorizo',
    category: 'hamburguesa',
    price: 8,
    imagePath: './images/temporal-product.jpg',
    imageAltText: 'alt text',
  },
  {
    id: 'f31b50c9-e77d-49ff-8cbd-4e8c22d7dfa1',
    name: 'Casera',
    category: 'hamburguesa',
    price: 9,
    imagePath: './images/temporal-product.jpg',
    imageAltText: 'alt text',
  },
  {
    id: 'a857eaa2-27cc-4359-9d06-c236f14b1495',
    name: 'Parrillera',
    category: 'hamburguesa',
    price: 10,
    imagePath: './images/temporal-product.jpg',
    imageAltText: 'alt text',
  },
  {
    id: '1602068d-0609-4679-87fd-78a3d702d0a2',
    name: 'Royal Clásica',
    category: 'hamburguesa',
    price: 10,
    imagePath: './images/temporal-product.jpg',
    imageAltText: 'alt text',
  },
  {
    id: '155ebc87-0d45-450f-90e0-5bc0e9e79f0e',
    name: 'Royal Casera',
    category: 'hamburguesa',
    price: 12.5,
    imagePath: './images/temporal-product.jpg',
    imageAltText: 'alt text',
  },
  {
    id: '697c6315-c402-4e83-b2de-0df8712440e2',
    name: 'Ala',
    category: 'broaster',
    price: 10,
    imagePath: './images/temporal-product.jpg',
    imageAltText: 'alt text',
  },
  {
    id: '2011b10f-441c-472a-9dd4-66db19881f9d',
    name: 'Cafe',
    category: 'bebida',
    price: 10,
    imagePath: './images/temporal-product.jpg',
    imageAltText: 'alt text',
  },
];
