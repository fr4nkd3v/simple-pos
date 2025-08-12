import { Icon } from '../../shared/icon';

export const MenuPage = () => {
  return (
    <div className='p-5'>
      <div className='flex items-center gap-2 text-gray-800'>
        <Icon
          name='bookLi'
          className='h-6 w-6'
        />

        <h1 className='text-xl font-semibold'>Carta</h1>
      </div>

      <p>Aqui se mostrará el contenido de la carta</p>
    </div>
  );
};
