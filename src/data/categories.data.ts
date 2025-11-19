export const categories = [
  'hamburguesa', 'broaster', 'bebida'
] as const

export type TCategory = typeof categories[number]