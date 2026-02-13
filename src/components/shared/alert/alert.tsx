import { useContext } from 'react';
import { Icon } from '@/components/shared';
import {
  alertStyles,
  iconMap,
  type IAlertMessageProps,
  type IAlertProps,
  type IAlertRootProps,
} from './alert.types';
import { AlertContext } from './alert.context';

export const AlertRoot = ({ children, type }: IAlertRootProps) => {
  const styles = alertStyles[type];

  return (
    <AlertContext.Provider value={{ type }}>
      <div
        className={`flex flex-col gap-3 rounded-lg border p-4 ${styles.container}`}
      >
        {children}
      </div>
    </AlertContext.Provider>
  );
};

export const AlertIcon = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('AlertIcon debe usarse dentro de AlertRoot');
  }

  const styles = alertStyles[context.type];

  return (
    <Icon
      name={iconMap[context.type]}
      className={`mt-0.5 h-6 w-6 flex-shrink-0 ${styles.icon}`}
    />
  );
};

export const AlertMessage = ({ message, children }: IAlertMessageProps) => {
  return (
    <div className='flex flex-1 items-center gap-2'>
      {children}
      <p>{message}</p>
    </div>
  );
};

export const AlertList = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-col gap-0.5'>{children}</div>;
};

export const AlertListItem = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex items-center gap-2 pl-1'>{children}</div>;
};

export const AlertDefault = ({ type, message }: IAlertProps) => {
  return (
    <AlertRoot type={type}>
      <AlertMessage message={message}>
        <AlertIcon />
        <p>{message}</p>
      </AlertMessage>
    </AlertRoot>
  );
};
