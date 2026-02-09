import { type TIconName } from '@/components/shared';

export type AlertType = 'success' | 'warning' | 'error';

export interface IAlertProps {
  type: AlertType;
  message: string;
}

export const alertStyles = {
  success: {
    container: 'bg-lime-50 border-lime-500',
    icon: 'text-lime-500',
  },
  warning: {
    container: 'bg-yellow-50 border-amber-400',
    icon: 'text-amber-400',
  },
  error: {
    container: 'bg-red-50 border-red-200',
    icon: 'text-red-600',
  },
};

export const iconMap: Record<AlertType, TIconName> = {
  success: 'tickCircleLi',
  warning: 'dangerLi',
  error: 'forbiddenLi',
};
