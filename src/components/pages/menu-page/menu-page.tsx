import { Icon } from '@/components/shared';

export const MenuPage = () => {
  const header = (
    <div className='flex items-center gap-2 text-gray-800'>
      <Icon
        name='bookLi'
        className='h-6 w-6'
      />

      <h1 className='text-xl font-semibold'>Carta</h1>
    </div>
  );

  return (
    <div className='p-5'>
      {header}

      <p>Aqui se mostrará el contenido de la carta</p>
    </div>
  );
};
