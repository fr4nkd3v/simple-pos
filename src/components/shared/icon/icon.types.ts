import {
  BookBo,
  BookLi,
  GraphBo,
  GraphLi,
  ReceiptBo,
  ReceiptEditLi,
  ReceiptLi,
  BowlLi,
  PenLi,
  AddLi,
  MinusLi,
  TrashLi,
  DotsLi,
  ArrowDownLi,
  ArrowUpLi,
} from './variants';

export const iconsMap = {
  bookLi: BookLi,
  bookBo: BookBo,
  graphLi: GraphLi,
  graphBo: GraphBo,
  receiptLi: ReceiptLi,
  receiptBo: ReceiptBo,
  receiptEditLi: ReceiptEditLi,
  bowlLi: BowlLi,
  penLi: PenLi,
  addLi: AddLi,
  minusLi: MinusLi,
  trashLi: TrashLi,
  dotsLi: DotsLi,
  arrowDownLi: ArrowDownLi,
  arrowUpLi: ArrowUpLi,
};

export type TIconName = keyof typeof iconsMap;

export interface IIconProps {
  name: TIconName;
  className?: string;
}

export const STROKE_WIDTH = 2;
