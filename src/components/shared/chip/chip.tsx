export const Chip = ({ text }: { text: string }) => {
  return <button className="bg-white rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 flex py-3 px-4 w-fit">
    {text}
  </button>
}