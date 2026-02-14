import { create } from 'zustand';
import type { IUsePageState } from './use-page-store.types';
import { EPage } from '@/types';

export const usePageStore = create<IUsePageState>((set) => ({
  selectedPage: EPage.ORDERS_PAGE,
  setPage: (page) => {
    set({ selectedPage: page });
  },
}));
