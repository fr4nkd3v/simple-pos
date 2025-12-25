import { useState } from 'react';

import { Header } from '@/components/shared';
import { productsData } from '@/data';

import { CurrentOrderControl, MenuFilters, MenuItem } from './components';
import { filtersMenuAdapter } from './menu-page.utils';
import { useCurrentOrderStore } from '@/stores';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/shadcn';

export const MenuPage = () => {
  const [openConfirmDiscard, setOpenConfirmDiscard] = useState(false);
  const allCategoryFilter = 'todo';
  const [selectedFilter, setSelectedFilter] = useState(allCategoryFilter);

  const filteredProducts =
    selectedFilter === 'todo'
      ? productsData
      : productsData.filter((product) => product.category === selectedFilter);

  const {
    number: orderNumber,
    items: currentOrderItems,
    addItem: addCurrentOrderItem,
    subtractItem: subtractCurrentOrderItem,
    clearOrder: clearCurrentOrder,
  } = useCurrentOrderStore();

  const getQuantityInOrder = (productId: string): number | undefined => {
    const foundItem = currentOrderItems.find(
      (item) => item.productId === productId,
    );
    if (!foundItem || foundItem.quantity < 1) return;

    return foundItem.quantity;
  };

  const handleItemClick = (itemId: string) => {
    const currentQuantity = getQuantityInOrder(itemId);

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
                currentQuantity={getQuantityInOrder(id)}
              />
            );
          },
        )}
      </ul>

      {orderNumber && currentOrderItems.length && (
        <div className='fixed bottom-current-order-offset w-[calc(100%_-_2.5rem)]'>
          <CurrentOrderControl onDiscard={() => setOpenConfirmDiscard(true)} />
        </div>
      )}

      <AlertDialog
        open={openConfirmDiscard}
        onOpenChange={setOpenConfirmDiscard}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              ¿Seguro que quieres descartar esta cuenta?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Al descartar la cuenta se perderá todo el registro de los
              productos que escogiste y se borrará la cuenta para que puedas
              iniciar una nueva desde cero.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={clearCurrentOrder}>
              Descartar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
