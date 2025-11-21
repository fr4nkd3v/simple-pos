type TDataFilter = {
  category: string
  countItems: number
}

export type TMenuFiltersProps = {
  dataList: TDataFilter[];
  selectedCategoryFilter: string;
  onChangeFilter: (filter: string) => void;
};
