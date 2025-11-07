import { type JSX, useState } from 'react';

import { MenuPage, OrdersPage, ReportPage } from '@/components/pages';
import { Navbar } from '@/components/shared';

function App() {
  const [pageId, setPageId] = useState<number>(1);

  const pages: Record<number, JSX.Element> = {
    1: <MenuPage />,
    2: <OrdersPage />,
    3: <ReportPage />
  }

  return (
    <div className='grid h-full grid-rows-[1fr_auto]'>
      <main className='w-full bg-white font-geist text-gray-700'>
        {pages[pageId]}
      </main>

      <Navbar pageId={pageId} onItemClick={setPageId} />
    </div>
  );
}

export default App;
