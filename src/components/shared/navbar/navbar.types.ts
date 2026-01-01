import { type TIconName } from '@/components/shared';
import type { EPage } from '@/types';

export interface INavbarItemProps {
  text: string;
  icon: TIconName;
  onClick: () => void;
  active?: boolean;
}

export interface INavbarData
  extends Omit<INavbarItemProps, 'active' | 'onClick'> {
  page: EPage;
  iconActive: TIconName;
}

export interface INavbarProps {
  page: EPage;
  onItemClick: (page: EPage) => void;
}
