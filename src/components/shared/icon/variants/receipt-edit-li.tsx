import { STROKE_WIDTH } from '../icon.types';

export const ReceiptEditLi = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentcolor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m18.211 14.77-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01'
        strokeWidth={STROKE_WIDTH}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.7 15.28c.3 1.08 1.14 1.92 2.22 2.22'
        strokeWidth={STROKE_WIDTH}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
