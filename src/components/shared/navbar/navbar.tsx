import { NavbarItem } from './navbar-item';

export const Navbar = () => {
  return (
    <nav>
      <ul className='flex h-[72px]'>
        <NavbarItem
          text='Carta'
          icon='bookLi'
          active
          key={1}
        />
        <NavbarItem
          text='Carta'
          icon='bookLi'
          key={2}
        />
        <NavbarItem
          text='Carta'
          icon='bookLi'
          key={3}
        />
      </ul>
    </nav>
  );
};
