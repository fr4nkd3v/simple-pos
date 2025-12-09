import { Drawer, Icon } from '@/components/shared';
import { useCurrentOrderDetail } from '@/hooks';

export const CurrentOrderButton = () => {
  const { orderNumberLabel, orderItems, itemsCount, totalPrice } =
    useCurrentOrderDetail();

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
              <span className='font-semibold'>{itemsCount}</span>
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
        <Drawer.Header className='flex flex-row justify-between text-gray-700'>
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
              <span className='font-semibold'>{itemsCount}</span>
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

        <div className='p-4'>
          <ul>
            {orderItems.map((item) => {
              const { name, price, id } = item;
              return (
                <li key={id}>
                  {item.quantity} | {name} | S/ {item.quantity * price}
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};
