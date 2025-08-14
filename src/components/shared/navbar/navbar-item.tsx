import { Icon, type TIconName } from '@/components/shared';
import { classNames } from '@/utils';
interface INavbarItemProps {
  text: string;
  icon: TIconName;
  active?: boolean;
}
export const NavbarItem = ({
  text,
  icon,
  active = false,
}: INavbarItemProps) => {
  return (
    <li className='flex flex-1 flex-col items-center justify-center gap-1'>
      <Icon
        name={icon}
        className={classNames(
          'h-7 w-7',
          active ? 'text-gray-900' : 'text-gray-400',
        )}
      />

      <div
        className={classNames(
          'text-xs font-semibold',
          active ? 'text-gray-900' : 'text-gray-400',
        )}
      >
        {text}
      </div>
    </li>
  );
};
