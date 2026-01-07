import { Button, Drawer } from '@/components/shared';
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
          <CurrentOrderControlPreview className='h-[52px] rounded-xl border border-gray-200 bg-white px-6 shadow-[0_0_20px_0_rgba(0,0,0,.1),_0_10px_20px_0_rgba(0,0,0,.1)]' />
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
