import { productsData } from '@/data';

export const getProductPrice = (productId: string) => {
  const foundProduct = productsData.find((product) => product.id === productId);

  if (!foundProduct) return 0;

  return foundProduct.price;
};

export const getProductDetail = (productId: string) => {
  const foundProduct = productsData.find((product) => product.id === productId);

  if (!foundProduct) return null;

  return foundProduct;
};
