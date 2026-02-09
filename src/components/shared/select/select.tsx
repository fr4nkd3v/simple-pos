import type { ComponentProps } from 'react';
import {
  Select as SelectRaw,
  SelectContent as SelectRawContent,
  SelectGroup as SelectRawGroup,
  SelectItem as SelectRawItem,
  SelectTrigger as SelectRawTrigger,
  SelectValue as SelectRawValue,
} from '@/components/shadcn';

export const SelectRoot = ({
  placeholder,
  className,
  children,
  size = 'default',
  value,
  disabled = false,
  onValueChange
}: {
  placeholder: string;
  className?: string;
  children?: React.ReactNode;
  size?: ComponentProps<typeof SelectRawTrigger>['size'];
  value?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
}) => {
  return (
    <SelectRaw
      value={value}
      disabled={disabled}
      onValueChange={onValueChange}
    >
      <SelectRawTrigger
        className={className}
        size={size}
      >
        <SelectRawValue placeholder={placeholder} />
      </SelectRawTrigger>
      <SelectRawContent
        side='bottom'
        position='popper'
        align='start'
      >
        <SelectRawGroup>{children}</SelectRawGroup>
      </SelectRawContent>
    </SelectRaw>
  );
};

export const SelectItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return <SelectRawItem value={value}>{label}</SelectRawItem>;
};
