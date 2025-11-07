import type { TCategory } from "./categories.data"

interface IProduct {
  name: string
  description?: string
  category: TCategory
  price: number
  imagePath: string
}

export const products:IProduct[] = [
  {
    name: 'Clásica Carne',
    category: 'hamburguesa',
    price: 6,
    imagePath: 'https://www.sargento.com/assets/Uploads/Recipe/Image/portabella-burger__FocusFillWyIwLjAwIiwiMC4wMCIsNDM4LDQzOF0_CompressedW10.jpg'
  },
  {
    name: 'Clásica Pollo',
    category: 'hamburguesa',
    price: 6,
    imagePath: 'https://www.sargento.com/assets/Uploads/Recipe/Image/portabella-burger__FocusFillWyIwLjAwIiwiMC4wMCIsNDM4LDQzOF0_CompressedW10.jpg'
  },
  {
    name: 'Chorizo',
    category: 'hamburguesa',
    price: 8,
    imagePath: 'https://www.sargento.com/assets/Uploads/Recipe/Image/portabella-burger__FocusFillWyIwLjAwIiwiMC4wMCIsNDM4LDQzOF0_CompressedW10.jpg'
  },
  {
    name: 'Casera',
    category: 'hamburguesa',
    price: 9,
    imagePath: 'https://www.sargento.com/assets/Uploads/Recipe/Image/portabella-burger__FocusFillWyIwLjAwIiwiMC4wMCIsNDM4LDQzOF0_CompressedW10.jpg'
  },
  {
    name: 'Parrillera',
    category: 'hamburguesa',
    price: 10,
    imagePath: 'https://www.sargento.com/assets/Uploads/Recipe/Image/portabella-burger__FocusFillWyIwLjAwIiwiMC4wMCIsNDM4LDQzOF0_CompressedW10.jpg'
  },
  {
    name: 'Royal Clásica',
    category: 'hamburguesa',
    price: 10,
    imagePath: 'https://www.sargento.com/assets/Uploads/Recipe/Image/portabella-burger__FocusFillWyIwLjAwIiwiMC4wMCIsNDM4LDQzOF0_CompressedW10.jpg'
  },
  {
    name: 'Royal Casera',
    category: 'hamburguesa',
    price: 12.50,
    imagePath: 'https://www.sargento.com/assets/Uploads/Recipe/Image/portabella-burger__FocusFillWyIwLjAwIiwiMC4wMCIsNDM4LDQzOF0_CompressedW10.jpg'
  },
  {
    name: 'Ala',
    category: 'broaster',
    price: 10,
    imagePath: 'https://www.sargento.com/assets/Uploads/Recipe/Image/portabella-burger__FocusFillWyIwLjAwIiwiMC4wMCIsNDM4LDQzOF0_CompressedW10.jpg'
  },
]