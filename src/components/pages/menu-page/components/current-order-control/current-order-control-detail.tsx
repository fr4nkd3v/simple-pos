import { useCurrentOrderDetail } from '@/hooks';
import { CurrentOrderControlItem } from './current-order-control-item';

export const CurrentOrderControlDetail = () => {
  const {
    currentOrderDetailedReverseRounds: currentOrderReverseRounds,
    addCurrentOrderItem,
    subtractCurrentOrderItem,
    deleteCurrentOrderItem,
    isEditing,
  } = useCurrentOrderDetail();

  const roundEmptyState = 'Aún no has agregado productos.';

  const handleItemAdd = (itemId: string) => {
    addCurrentOrderItem({ productId: itemId, quantity: 1 });
  };
  const handleItemSubtract = (itemId: string) => {
    subtractCurrentOrderItem({ productId: itemId, quantity: 1 });
  };
  const handleItemDelete = (itemId: string) => {
    deleteCurrentOrderItem(itemId);
  };

  return (
    <div className='overflow-auto border-b border-gray-200 pb-4'>
      <ol>
        {currentOrderReverseRounds.map((round) => {
          const isCurrentNewRound =
            isEditing && round.number === currentOrderReverseRounds.length;
          const hasItems = round.items.length;

          return (
            <li key={round.number}>
              <div className='bg-gray-100 px-6 py-2 text-xs'>
                {isCurrentNewRound ? 'Nueva ronda ' : 'Ronda '}
                {round.number}
              </div>

              {hasItems ? (
                <ul>
                  {round.items.map((item) => {
                    return (
                      <CurrentOrderControlItem
                        key={item.id}
                        itemId={item.id}
                        quantity={item.quantity}
                        productName={item.name}
                        price={item.quantity * item.price}
                        imagePath={item.imagePath}
                        imageAltText={item.imageAltText}
                        onAdd={handleItemAdd}
                        onSubtract={handleItemSubtract}
                        onDelete={handleItemDelete}
                      />
                    );
                  })}
                </ul>
              ) : (
                <div className='flex h-14 items-center justify-center text-sm text-gray-500'>
                  {roundEmptyState}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
