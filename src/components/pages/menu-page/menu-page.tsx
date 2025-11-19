import { useState } from 'react';

import { Header, ProductItem } from '@/components/shared';
import { productsData } from '@/data';

import { MenuFilters } from './components';
import { filtersMenuAdapter } from './menu-page.utils';

export const MenuPage = () => {
  const allCategoryFilter = 'todo'
  const [selectedFilter, setSelectedFilter] = useState(allCategoryFilter)

  const filteredProducts = selectedFilter === 'todo' ? productsData : productsData.filter(product => product.category === selectedFilter)

  return (
    <div className='p-5 flex flex-col gap-5'>
      <Header title='Carta' icon='bookLi' />

      <MenuFilters
        dataList={filtersMenuAdapter(productsData)}
        selectedCategoryFilter={selectedFilter}
        onChangeFilter={setSelectedFilter}
      />

      <ul className='border-t border-gray-200'>
        {filteredProducts.map(({ name, category, price, imagePath }, index) => {
          return (<ProductItem key={index} name={name} category={category} imagePath={imagePath} price={price} />)
        })}
      </ul>
    </div>
  );
};
