import type { TIconName } from '../icon';

export type TRadioButtonItemIcon = {
  icon: TIconName;
  className?: string;
};

export type TRadioButtonItemProps = {
  value: string;
  id: string;
  label?: string;
  children?: React.ReactNode;
};

export type TRadioButtonGroupProps = {
  defaultValue: string;
  children: React.ReactNode;
};
