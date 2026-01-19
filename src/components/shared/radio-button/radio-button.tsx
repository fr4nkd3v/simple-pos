import { Icon, Label, RadioGroup, RadioGroupItem } from '@/components/shared';
import { classNames } from '@/utils';
import type {
  TRadioButtonGroupProps,
  TRadioButtonItemIcon,
  TRadioButtonItemProps,
} from './radio-button.types';

export const RadioButtonItem = ({
  label,
  value,
  id,
  children,
}: TRadioButtonItemProps) => {
  return (
    <Label
      htmlFor={id}
      className={classNames(
        'relative flex min-h-24 flex-1 cursor-pointer flex-col items-center justify-center bg-white py-5 font-semibold text-gray-500',
        'has-[[data-state=checked]]:bg-gray-900 has-[[data-state=checked]]:text-white',
      )}
    >
      <RadioGroupItem
        value={value}
        id={id}
        className='absolute left-2 top-2 data-[state=checked]:border-white data-[state=checked]:fill-white'
      />
      {children ? children : null}
      {label && <span>{label}</span>}
    </Label>
  );
};

export const RadioButtonItemIcon = ({
  icon,
  className,
}: TRadioButtonItemIcon) => {
  return (
    <Icon
      name={icon}
      className={classNames('size-7', className)}
    />
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
