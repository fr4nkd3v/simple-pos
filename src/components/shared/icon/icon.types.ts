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
  SlashLi,
  EditLi,
  WalletMoneyLi,
  ShareLi,
  CopyLi,
  DollarCircleLi,
  YapeLi,
  PlinLi,
  DangerLi,
  ForbiddenLi,
  TickCircleLi,
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
  slashLi: SlashLi,
  editLi: EditLi,
  walletMoneyLi: WalletMoneyLi,
  shareLi: ShareLi,
  copyLi: CopyLi,
  dollarCircleLi: DollarCircleLi,
  yapeLi: YapeLi,
  plinLi: PlinLi,
  dangerLi: DangerLi,
  forbiddenLi: ForbiddenLi,
  tickCircleLi: TickCircleLi,
};

export type TIconName = keyof typeof iconsMap;

export interface IIconProps {
  name: TIconName;
  className?: string;
}

export const STROKE_WIDTH = 2;
