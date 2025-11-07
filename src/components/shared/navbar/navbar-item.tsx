import { Icon } from '@/components/shared';
import { classNames } from '@/utils';

import { type INavbarItemProps } from './navbar.types';

export const NavbarItem = ({
  text,
  icon,
  onClick,
  active = false
}: INavbarItemProps) => {
  return (
    <li className='cursor-pointer flex flex-1 flex-col items-center justify-center gap-1'
      onClick={onClick}
    >
      <Icon
        name={icon}
        className={classNames(
          'h-7 w-7',
          active ? 'text-gray-900' : 'text-gray-500',
        )}
      />

      <div
        className={classNames(
          'text-xs font-semibold',
          active ? 'text-gray-900' : 'text-gray-500',
        )}
      >
        {text}
      </div>
    </li>
  );
};
