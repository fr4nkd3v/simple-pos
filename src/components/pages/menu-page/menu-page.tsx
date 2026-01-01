import { useState } from 'react';

import { Header } from '@/components/shared';
import { productsData } from '@/data';

import {
  ConfirmDiscardDialog,
  CurrentOrderControl,
  MenuFilters,
  MenuItem,
} from './components';
import { filtersMenuAdapter } from './menu-page.utils';
import { registerOrder, updateOrder } from '@/services';
import { toast } from 'sonner';
import { useCurrentOrderDetail } from '@/hooks';

export const MenuPage = () => {
  const [openConfirmDiscard, setOpenConfirmDiscard] = useState(false);
  const allCategoryFilter = 'todo';
  const [selectedFilter, setSelectedFilter] = useState(allCategoryFilter);

  const filteredProducts =
    selectedFilter === 'todo'
      ? productsData
      : productsData.filter((product) => product.category === selectedFilter);

  const {
    orderNumber,
    currentOrderId,
    currentOrderItems,
    currentOrderRounds,
    addCurrentOrderItem,
    subtractCurrentOrderItem,
    clearCurrentOrder,
    getQuantityInCurrentRound,
  } = useCurrentOrderDetail();

  const handleItemClick = (itemId: string) => {
    const currentQuantity = getQuantityInCurrentRound(itemId);

    if (!currentQuantity) {
      addCurrentOrderItem({ productId: itemId, quantity: 1 });
    }
  };
  const handleItemAdd = (itemId: string) => {
    addCurrentOrderItem({ productId: itemId, quantity: 1 });
  };
  const handleItemSubtract = (itemId: string) => {
    subtractCurrentOrderItem({ productId: itemId, quantity: 1 });
  };

  const handleConfirm = () => {
    const isEditing = currentOrderRounds.length > 1;

    if (isEditing && currentOrderId) {
      updateOrder({
        id: currentOrderId,
        items: [...currentOrderItems],
        rounds: [...currentOrderRounds],
      });

      toast('La cuenta ha sido actualizada con éxito');
    } else {
      registerOrder({
        items: [...currentOrderItems],
        rounds: [...currentOrderRounds],
      });

      toast('La cuenta ha sido creada con éxito');
    }

    clearCurrentOrder();
  };

  const handleDiscard = () => setOpenConfirmDiscard(true);

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
                onAdd={handleItemAdd}
                onSubtract={handleItemSubtract}
                currentQuantity={getQuantityInCurrentRound(id)}
              />
            );
          },
        )}
      </ul>

      {orderNumber && currentOrderItems.length && (
        <div className='fixed bottom-current-order-offset w-[calc(100%_-_2.5rem)]'>
          <CurrentOrderControl
            onDiscard={handleDiscard}
            onConfirm={handleConfirm}
          />
        </div>
      )}

      <ConfirmDiscardDialog
        open={openConfirmDiscard}
        onOpenChange={setOpenConfirmDiscard}
        onConfirm={clearCurrentOrder}
      />
    </div>
  );
};
