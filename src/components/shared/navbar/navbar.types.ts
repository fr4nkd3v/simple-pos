import { type TIconName } from '@/components/shared';

export interface INavbarItemProps {
  text: string;
  icon: TIconName;
  onClick: () => void
  active?: boolean;
}

export interface INavbarData extends Omit<INavbarItemProps, 'active' | 'onClick'> {
  id: number,
  iconActive: TIconName;
}