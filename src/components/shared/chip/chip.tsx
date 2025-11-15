import { classNames } from "@/utils"

import type { TChipProps } from "./chip.types"

export const Chip = ({ text, isSelected = false, onClick }: TChipProps) => {
  const baseClasses = "rounded-lg border text-sm font-semibold flex py-3 px-4 w-fit"
  const unselectedClasses = "bg-white text-gray-700 border-gray-200"
  const selectedClasses = "bg-gray-900 text-white border-gray-900"

  return <button className={classNames(baseClasses, isSelected ? selectedClasses : unselectedClasses)} onClick={onClick}>
    {text}
  </button>
}