import { useState } from 'react';

import { Header } from '@/components/shared';
import { productsData } from '@/data';

import { MenuFilters, MenuItem } from './components';
import { filtersMenuAdapter } from './menu-page.utils';

export const MenuPage = () => {
  const allCategoryFilter = 'todo';
  const [selectedFilter, setSelectedFilter] = useState(allCategoryFilter);

  const filteredProducts =
    selectedFilter === 'todo'
      ? productsData
      : productsData.filter((product) => product.category === selectedFilter);

  return (
    <div className='flex flex-col gap-5 p-5'>
      <Header
        title='Carta'
        icon='bookLi'
      />

      <MenuFilters
        dataList={filtersMenuAdapter(productsData)}
        selectedCategoryFilter={selectedFilter}
        onChangeFilter={setSelectedFilter}
      />

      <ul className='border-t border-gray-200'>
        {filteredProducts.map(
          ({ id, name, category, price, imagePath, imageAltText }) => {
            return (
              <MenuItem
                key={id}
                name={name}
                category={category}
                price={price}
                imagePath={imagePath}
                altText={imageAltText}
              />
            );
          },
        )}
      </ul>
    </div>
  );
};
