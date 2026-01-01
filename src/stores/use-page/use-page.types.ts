import type { EPage } from '@/types';

export interface IUsePageState {
  selectedPage: EPage;
  setPage: (page: EPage) => void;
}
