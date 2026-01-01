import { EPage } from '@/types';
import type { INavbarData } from './navbar.types';

export const NAVBAR_DATA: INavbarData[] = [
  {
    page: EPage.MENU_PAGE,
    text: 'Carta',
    icon: 'bookLi',
    iconActive: 'bookBo',
  },
  {
    page: EPage.ORDERS_PAGE,
    text: 'Cuentas',
    icon: 'receiptLi',
    iconActive: 'receiptBo',
  },
  {
    page: EPage.REPORTS_PAGE,
    text: 'Reporte',
    icon: 'graphLi',
    iconActive: 'graphBo',
  },
];
