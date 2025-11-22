import { useState } from 'react';

import { Header } from '@/components/shared';
import { productsData } from '@/data';

import { CurrentOrderButton, MenuFilters, MenuItem } from './components';
import { filtersMenuAdapter } from './menu-page.utils';
import { useCurrentOrderStore } from '@/stores';

export const MenuPage = () => {
  const allCategoryFilter = 'todo';
  const [selectedFilter, setSelectedFilter] = useState(allCategoryFilter);

  const filteredProducts =
    selectedFilter === 'todo'
      ? productsData
      : productsData.filter((product) => product.category === selectedFilter);

  const { number: orderNumber, items: orderItems } = useCurrentOrderStore();

  return (
    <div className='relative flex flex-col gap-5 p-5'>
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

      {orderNumber && orderItems.length && (
        <div className='bottom-current-order-offset shad fixed w-[calc(100%_-_2.5rem)]'>
          <CurrentOrderButton
            orderNumber='35'
            countItems={1}
          />
        </div>
      )}
    </div>
  );
};
