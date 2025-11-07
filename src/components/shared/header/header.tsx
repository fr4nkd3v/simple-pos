import { Icon } from "@/components/shared"

import type { IHeaderProps } from "./header.types"

export const Header = ({ title, icon }: IHeaderProps) => {
  return (
    <div className='flex items-center gap-2 text-gray-800'>
      <Icon
        name={icon}
        className='h-6 w-6'
      />

      <h1 className='text-xl font-semibold'>{title}</h1>
    </div>
  )
}