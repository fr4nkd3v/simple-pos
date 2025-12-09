export interface IDrawerWithChildren {
  children: React.ReactNode;
  className?: string;
}
export interface IDrawerTrigger {
  children: React.ReactNode;
  asChild?: boolean;
}
export interface IDrawerContent {
  children: React.ReactNode;
  title: string;
  description?: string;
}
