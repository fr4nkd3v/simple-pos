import type { IProduct } from '@/types';

export const filtersMenuAdapter = (productsData: IProduct[]) => {
  const ObjCategoryCount: Record<string, number> = productsData.reduce(
    (acc: Record<string, number>, item) => {
      if (acc[item.category]) acc[item.category] += 1;
      else acc[item.category] = 1;
      return acc;
    },
    { todo: productsData.length },
  );

  const CategoryFilterData = Object.entries(ObjCategoryCount).map(
    ([category, countItems]) => ({ category, countItems }),
  );

  return CategoryFilterData;
};
