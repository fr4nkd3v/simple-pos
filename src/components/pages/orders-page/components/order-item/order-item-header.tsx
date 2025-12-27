import { Icon } from '@/components/shared';
import { useOrderContext } from './order-item.context';

export const OrderItemHeader = () => {
  const { order, isExpanded, toggleExpanded } = useOrderContext();

  return (
    <div className='flex items-center justify-between gap-3'>
      <div className='flex aspect-square w-8 items-center justify-center rounded-lg bg-gray-200'>
        <Icon
          name='dotsLi'
          className='aspect-square w-6 text-gray-700'
        />
      </div>

      <p className='flex flex-1 font-semibold'>#{order.number}</p>

      <button
        className='flex aspect-square w-9 items-center justify-center rounded-lg hover:bg-gray-200'
        onClick={toggleExpanded}
      >
        <Icon
          name={isExpanded ? 'arrowUpLi' : 'arrowDownLi'}
          className='aspect-square w-6 text-gray-700'
        />
      </button>
    </div>
  );
};
