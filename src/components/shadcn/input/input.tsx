import * as React from 'react';

import { classNames } from '@/utils';

function Input({
  className,
  type,
  size = 'default',
  ...props
}: Omit<React.ComponentProps<'input'>, 'size'> & {
  // type?: React.ComponentProps<'input'>['type'];
  size?: 'sm' | 'lg' | 'default';
}) {
  return (
    <input
      type={type}
      data-slot='input'
      data-size={size}
      className={classNames(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 shadow-xs w-full min-w-0 rounded-lg border border-gray-400 bg-white px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        'data-[size=default]:h-9 data-[size=lg]:h-10 data-[size=sm]:h-8',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
