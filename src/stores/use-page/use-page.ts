import { create } from 'zustand';
import type { IUsePageState } from './use-page.types';
import { EPage } from '@/types';

export const usePageStore = create<IUsePageState>((set) => ({
  selectedPage: EPage.PAYMENT_PAGE,
  setPage: (page) => {
    set({ selectedPage: page });
  },
}));
