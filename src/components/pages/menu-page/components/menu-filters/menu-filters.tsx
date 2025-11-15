import { Chip } from "@/components/shared"
import { capitalize } from "@/utils"

import type { TMenuFilters } from "./menu-filters.types"

export const MenuFilters = ({ dataList }: TMenuFilters) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {dataList.map(item => (
        <Chip text={`${capitalize(item.category)} (${item.countItems})`} />
      ))}
    </div>
  )
}