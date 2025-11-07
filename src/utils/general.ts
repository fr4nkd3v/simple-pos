export const formatNumberToPrice = (price: number): string => {
  return 'S/ ' + price.toFixed(2)
}

export const capitalize = (text: string) => {
  return text[0].toUpperCase() + text.slice(1).toLowerCase()
}