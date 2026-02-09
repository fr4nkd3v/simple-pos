import { Icon } from '@/components/shared';
import { alertStyles, iconMap, type IAlertProps } from './alert.types';

export const Alert = ({ type, message }: IAlertProps) => {
  const styles = alertStyles[type];

  return (
    <div
      className={`flex items-center gap-3 rounded-lg border p-4 ${styles.container}`}
    >
      <Icon
        name={iconMap[type]}
        className={`mt-0.5 h-6 w-6 flex-shrink-0 ${styles.icon}`}
      />
      <div className='flex-1'>
        <p>{message}</p>
      </div>
    </div>
  );
};
