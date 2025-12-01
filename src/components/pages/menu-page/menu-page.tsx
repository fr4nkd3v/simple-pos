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

  const {
    number: orderNumber,
    items: orderItems,
    addItem: addCurrentOrderItem,
  } = useCurrentOrderStore();

  const currentOrderItemsCount = orderItems.reduce(
    (sum, item) => (sum += item.quantity),
    0,
  );

  const handleItemClick = (itemId: string) => {
    addCurrentOrderItem({ productId: itemId, quantity: 1 });
  };

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
                itemId={id}
                name={name}
                category={category}
                price={price}
                imagePath={imagePath}
                altText={imageAltText}
                onClick={handleItemClick}
              />
            );
          },
        )}
      </ul>

      {orderNumber && orderItems.length && (
        <div className='fixed bottom-current-order-offset w-[calc(100%_-_2.5rem)]'>
          <CurrentOrderButton
            orderNumber={orderNumber}
            countItems={currentOrderItemsCount}
          />
        </div>
      )}
    </div>
  );
};
