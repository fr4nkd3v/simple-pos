import { NAVBAR_DATA } from './navbar.data';
import { NavbarItem } from './navbar-item';

interface INavbarProps {
  pageId: number
  onItemClick: (pageId: number) => void
}

export const Navbar = ({ pageId, onItemClick }: INavbarProps) => {
  return (
    <nav className='bg-white'>
      <ul className='flex h-[72px]'>
        {NAVBAR_DATA.map((data) => {
          const isActive = data.id === pageId;
          return (
            <NavbarItem
              key={data.id}
              text={data.text}
              icon={isActive ? data.iconActive : data.icon}
              active={isActive}
              onClick={() => onItemClick(data.id)}
            />
          );
        })}
      </ul>
    </nav>
  );
};
