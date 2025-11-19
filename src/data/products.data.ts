import type { TCategory } from "./categories.data"

export interface IProduct {
  name: string
  description?: string
  category: TCategory
  price: number
  imagePath: string
}

export const productsData:IProduct[] = [
  {
    name: 'Clásica Carne',
    category: 'hamburguesa',
    price: 6,
    imagePath: './images/temporal-product.jpg'
  },
  {
    name: 'Clásica Pollo',
    category: 'hamburguesa',
    price: 6,
    imagePath: './images/temporal-product.jpg'
  },
  {
    name: 'Chorizo',
    category: 'hamburguesa',
    price: 8,
    imagePath: './images/temporal-product.jpg'
  },
  {
    name: 'Casera',
    category: 'hamburguesa',
    price: 9,
    imagePath: './images/temporal-product.jpg'
  },
  {
    name: 'Parrillera',
    category: 'hamburguesa',
    price: 10,
    imagePath: './images/temporal-product.jpg'
  },
  {
    name: 'Royal Clásica',
    category: 'hamburguesa',
    price: 10,
    imagePath: './images/temporal-product.jpg'
  },
  {
    name: 'Royal Casera',
    category: 'hamburguesa',
    price: 12.50,
    imagePath: './images/temporal-product.jpg'
  },
  {
    name: 'Ala',
    category: 'broaster',
    price: 10,
    imagePath: './images/temporal-product.jpg'
  },
  {
    name: 'Cafe',
    category: 'bebida',
    price: 10,
    imagePath: './images/temporal-product.jpg'
  },
]