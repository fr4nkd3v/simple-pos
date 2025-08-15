import { useState } from 'react';

import { MenuPage } from '@/components/pages';
import { Navbar } from '@/components/shared';

function App() {
  const [pageId, setPageId] = useState<number>(1);

  return (
    <div className='grid h-full grid-rows-[1fr_auto]'>
      <main className='w-full bg-white font-geist text-gray-700'>
        <MenuPage />
      </main>

      <Navbar pageId={pageId} onItemClick={setPageId} />
    </div>
  );
}

export default App;
