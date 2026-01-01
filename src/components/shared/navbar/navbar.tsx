import { NAVBAR_DATA } from './navbar.data';
import { NavbarItem } from './navbar-item';
import type { INavbarProps } from './navbar.types';

export const Navbar = ({ page, onItemClick }: INavbarProps) => {
  return (
    <nav className='bg-white'>
      <ul className='flex h-navbar'>
        {NAVBAR_DATA.map((data) => {
          const isActive = data.page === page;
          return (
            <NavbarItem
              key={data.page}
              text={data.text}
              icon={isActive ? data.iconActive : data.icon}
              active={isActive}
              onClick={() => onItemClick(data.page)}
            />
          );
        })}
      </ul>
    </nav>
  );
};
