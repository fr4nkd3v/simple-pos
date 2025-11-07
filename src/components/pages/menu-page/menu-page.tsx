import { Header, ProductItem } from '@/components/shared';
import { productsData } from '@/data';

export const MenuPage = () => {
  return (
    <div className='p-5 flex flex-col gap-5'>
      <Header title='Carta' icon='bookLi' />

      <ul className='border-t border-gray-200'>
        {productsData.map(({ name, category, price, imagePath }, index) => {
          return (<ProductItem key={index} name={name} category={category} imagePath={imagePath} price={price} />)
        })}
      </ul>
    </div>
  );
};
