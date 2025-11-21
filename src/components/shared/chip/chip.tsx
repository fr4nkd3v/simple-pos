import { classNames } from '@/utils';

import type { TChipProps } from './chip.types';

export const Chip = ({
  text,
  isSelected = false,
  onClick,
  className,
}: TChipProps) => {
  const baseClasses =
    'rounded-lg border text-sm font-semibold flex h-[42px] items-center px-4 w-fit outline-0 tracking-wide';
  const unselectedClasses = 'bg-white text-gray-700 border-gray-200';
  const selectedClasses = 'bg-gray-900 text-white border-gray-900';

  return (
    <button
      className={classNames(
        baseClasses,
        className,
        isSelected ? selectedClasses : unselectedClasses,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
