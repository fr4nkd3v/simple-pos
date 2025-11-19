import { Chip } from "@/components/shared"
import { capitalize } from "@/utils"

import type { TMenuFiltersProps } from "./menu-filters.types"

export const MenuFilters = ({ dataList, selectedCategoryFilter, onChangeFilter }: TMenuFiltersProps) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {dataList.map(item => (
        <Chip
          text={`${capitalize(item.category)} (${item.countItems})`}
          isSelected={item.category === selectedCategoryFilter} key={item.category}
          onClick={() => onChangeFilter(item.category)}
          className="flex-shrink-0"
        />
      ))}
    </div>
  )
}