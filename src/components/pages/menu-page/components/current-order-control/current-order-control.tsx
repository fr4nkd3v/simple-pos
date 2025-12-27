import { Button, Drawer, Icon } from '@/components/shared';
import { useCurrentOrderDetail } from '@/hooks';
import { CurrentOrderItem } from './current-order-item';
import type { TCurrentOrderControlProps } from './current-order-control.types';

export const CurrentOrderControl = ({
  onDiscard,
  onConfirm,
}: TCurrentOrderControlProps) => {
  const {
    orderNumberLabel,
    orderItems: currentOrderItems,
    itemsCount,
    totalPrice,
    addCurrentOrderItem,
    subtractCurrentOrderItem,
    deleteCurrentOrderItem,
  } = useCurrentOrderDetail();

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
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className='flex h-[52px] w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-6 text-base font-medium text-gray-700 shadow-[0_0_20px_0_rgba(0,0,0,.1),_0_10px_20px_0_rgba(0,0,0,.1)]'>
          <div className='flex items-center gap-1'>
            <Icon
              name='receiptEditLi'
              className='aspect-square h-5'
            />
            <span>{orderNumberLabel}</span>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <Icon
                name='bowlLi'
                className='aspect-square h-5 text-gray-500'
              />
              <span className='font-semibold lining-nums tabular-nums'>
                {itemsCount}
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <Icon
                name='penLi'
                className='aspect-square h-5 text-gray-500'
              />
              <span className='font-semibold'>{totalPrice}</span>
            </div>
          </div>
        </button>
      </Drawer.Trigger>

      <Drawer.Content>
        <Drawer.Header className='flex flex-row justify-between border-b border-gray-200 text-gray-700'>
          <div className='flex items-center gap-1 font-medium'>
            <Icon
              name='receiptEditLi'
              className='aspect-square h-5'
            />
            <span>{orderNumberLabel}</span>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <Icon
                name='bowlLi'
                className='aspect-square h-5 text-gray-500'
              />
              <span className='font-semibold lining-nums tabular-nums'>
                {itemsCount}
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <Icon
                name='penLi'
                className='aspect-square h-5 text-gray-500'
              />
              <span className='font-semibold'>{totalPrice}</span>
            </div>
          </div>
        </Drawer.Header>

        <div className='border-b border-gray-200 py-4'>
          <ul>
            {currentOrderItems.map((item) => {
              const { name, price, id, quantity, imagePath, imageAltText } =
                item;
              return (
                <CurrentOrderItem
                  key={id}
                  itemId={id}
                  quantity={quantity}
                  productName={name}
                  price={item.quantity * price}
                  imagePath={imagePath}
                  imageAltText={imageAltText}
                  onAdd={handleItemAdd}
                  onSubtract={handleItemSubtract}
                  onDelete={handleItemDelete}
                />
              );
            })}
          </ul>
        </div>

        <Drawer.Footer>
          <div className='flex w-full gap-3'>
            <Button
              variant='outline'
              size='lg'
              className='shrink-0'
              onClick={onDiscard}
            >
              Descartar
            </Button>
            <Button
              variant='default'
              size='lg'
              className='flex-1'
              onClick={onConfirm}
            >
              Confirmar
            </Button>
          </div>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  );
};
