import { MenuPage } from '@/components/pages';
import { Navbar } from './components/shared';

function App() {
  return (
    <div className='grid h-full grid-rows-[1fr_auto]'>
      <main className='w-full bg-white font-geist text-gray-700'>
        <MenuPage />
      </main>
      <Navbar />
    </div>
  );
}

export default App;
