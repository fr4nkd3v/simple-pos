import { Label, RadioGroup, RadioGroupItem } from '@/components/shared';
import { classNames } from '@/utils';
import type {
  TRadioButtonGroupProps,
  TRadioButtonItemProps,
} from './radio-button.types';

export const RadioButtonItem = ({
  label,
  value,
  id,
}: TRadioButtonItemProps) => {
  return (
    <Label
      htmlFor={id}
      className={classNames(
        'relative flex min-h-24 flex-1 cursor-pointer flex-col items-center justify-center space-x-2 bg-white py-5 font-semibold text-gray-500',
        'has-[[data-state=checked]]:bg-gray-900 has-[[data-state=checked]]:text-white',
      )}
    >
      <RadioGroupItem
        value={value}
        id={id}
        className='absolute left-2 top-2 data-[state=checked]:border-white data-[state=checked]:fill-white'
      />
      {label}
    </Label>
  );
};

export const RadioButtonGroup = ({
  defaultValue,
  children,
}: TRadioButtonGroupProps) => {
  return (
    <RadioGroup
      className='flex w-full gap-[1px] overflow-hidden rounded-lg border border-gray-300 bg-gray-300'
      defaultValue={defaultValue}
    >
      {children}
    </RadioGroup>
  );
};
