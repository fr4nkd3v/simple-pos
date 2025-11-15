import { capitalize, formatNumberToPrice } from "@/utils"

export const ProductItem = ({
  name, category, price, imagePath
}: {
  name: string
  category: string
  price: number
  imagePath: string
}) => {
  return (
    <li>
      <div className="flex py-3 border-b border-gray-200">
        <div className="flex-1">
          <p className="text-xl font-semibold text-gray-700">{name}</p>
          <p className="text-[13px] font-semibold text-gray-400">{capitalize(category)}</p>
          <p className="text-gray-700 text-2xl font-bold">{formatNumberToPrice(price)}</p>
        </div>
        <div><img className="h-28 aspect-square rounded-lg border border-gray-300" src={imagePath} /></div>
      </div>
    </li>
  )
}