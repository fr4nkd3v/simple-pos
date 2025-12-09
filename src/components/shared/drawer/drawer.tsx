import {
  RawDrawer,
  RawDrawerContent,
  RawDrawerFooter,
  RawDrawerHeader,
  RawDrawerTitle,
  RawDrawerTrigger,
} from '@/components/shadcn/drawer';
import type { IDrawerTrigger, IDrawerWithChildren } from './drawer.types';

export const DrawerRoot = ({ children }: IDrawerWithChildren) => {
  return <RawDrawer>{children}</RawDrawer>;
};

export const DrawerTrigger = ({ children, asChild }: IDrawerTrigger) => {
  return <RawDrawerTrigger asChild={asChild}>{children}</RawDrawerTrigger>;
};

export const DrawerContent = ({ children }: IDrawerWithChildren) => {
  return (
    <RawDrawerContent className='bg-white font-geist'>
      {children}
    </RawDrawerContent>
  );
};

export const DrawerHeader = ({ children, className }: IDrawerWithChildren) => {
  return <RawDrawerHeader className={className}>{children}</RawDrawerHeader>;
};

export const DrawerTitle = ({ children }: IDrawerWithChildren) => {
  return <RawDrawerTitle>{children}</RawDrawerTitle>;
};

export const DrawerFooter = ({ children }: IDrawerWithChildren) => {
  return <RawDrawerFooter>{children}</RawDrawerFooter>;
};
