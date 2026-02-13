import { createContext } from 'react';
import type { AlertType } from './alert.types';

export interface IAlertContextProps {
  type: AlertType;
}

export const AlertContext = createContext<IAlertContextProps | undefined>(
  undefined,
);
