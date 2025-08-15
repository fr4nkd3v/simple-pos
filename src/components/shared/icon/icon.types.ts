import { BookBo, BookLi, GraphBo, GraphLi, ReceiptBo, ReceiptEditLi, ReceiptLi } from './variants';

export const iconsMap = {
  bookLi: BookLi,
  bookBo: BookBo,
  graphLi: GraphLi,
  graphBo: GraphBo,
  receiptLi: ReceiptLi,
  receiptBo: ReceiptBo,
  receiptEditLi: ReceiptEditLi,
};

export type TIconName = keyof typeof iconsMap;

export interface IIconProps {
  name: TIconName;
  className?: string;
}

export const STROKE_WIDTH = 2;