import { Button, Drawer, Icon } from '@/components/shared';
import type { TCurrentOrderControlProps } from './current-order-control.types';

import { CurrentOrderControlPreview } from './current-order-control-preview';
import { CurrentOrderControlDetail } from './current-order-control-detail';

export const CurrentOrderControl = ({
  onDiscard,
  onConfirm,
}: TCurrentOrderControlProps) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className='w-full'>
          <CurrentOrderControlPreview className='shadow-card h-[52px] rounded-xl border border-gray-200 bg-white px-6' />
        </button>
      </Drawer.Trigger>

      <Drawer.Content>
        <Drawer.Header className='border-b'>
          <CurrentOrderControlPreview />
        </Drawer.Header>

        <CurrentOrderControlDetail />

        <Drawer.Footer>
          <div className='flex w-full gap-3'>
            <Button
              variant='outline'
              size='lg'
              className='shrink-0'
              onClick={onDiscard}
            >
              <Icon
                name='slashLi'
                className='aspect-square w-5'
              />
              Descartar
            </Button>
            <Button
              variant='default'
              size='lg'
              className='flex-1'
              onClick={onConfirm}
            >
              <Icon
                name='receiptLi'
                className='aspect-square w-5'
              />
              Confirmar
            </Button>
          </div>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  );
};
