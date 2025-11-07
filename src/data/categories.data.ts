export const categories = [
  'hamburguesa', 'broaster'
] as const

export type TCategory = typeof categories[number]