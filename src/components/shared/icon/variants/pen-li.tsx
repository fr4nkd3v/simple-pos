import { STROKE_WIDTH } from '../icon.types';

export const PenLi = ({ className = '' }) => {
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
        d='M4 14.486C4 16.432 5.484 18 7.328 18h.764C9.696 18 11 16.628 11 14.939c0-1.84-.794-2.489-1.979-2.911L5.98 10.972C4.794 10.55 4 9.902 4 8.062 4 6.371 5.304 5 6.908 5h.764C9.516 5 11 6.568 11 8.514M20 5l-5 13'
        strokeWidth={STROKE_WIDTH}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
