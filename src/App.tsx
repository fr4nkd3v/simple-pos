import { type JSX } from 'react';

import {
  MenuPage,
  OrdersPage,
  PaymentPage,
  ReportPage,
} from '@/components/pages';
import { Navbar, Toaster } from '@/components/shared';
import type { EPage } from './types';
import { usePageStore } from './stores/use-page/use-page';

function App() {
  const { selectedPage, setPage } = usePageStore();

  const pages: Record<EPage, JSX.Element> = {
    menu: <MenuPage />,
    orders: <OrdersPage />,
    reports: <ReportPage />,
    payment: <PaymentPage />,
  };

  return (
    <>
      <div className='grid h-full grid-rows-[1fr_auto]'>
        <main className='w-full bg-white pb-[72px] font-geist text-gray-700'>
          {pages[selectedPage]}
        </main>

        <div className='fixed bottom-0 w-full shadow-[0_-2px_15px_0_rgba(0,0,0,.1)]'>
          <Navbar
            page={selectedPage}
            onItemClick={setPage}
          />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
