import { BookLi } from './variants';

export const iconsMap = {
  bookLi: BookLi,
};

export type TIconName = keyof typeof iconsMap;

export interface IIconProps {
  name: TIconName;
  className?: string;
}

export const STROKE_WIDTH = 2;