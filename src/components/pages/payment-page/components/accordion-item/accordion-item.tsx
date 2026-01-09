import {
  AccordionContent as RawAccordionContent,
  AccordionItem as RawAccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/accordion';
import { Switch } from '@/components/shadcn/switch';
import { classNames } from '@/utils';

export const AccordionItemHeader = ({
  checked,
  onCheckedChange,
  title,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  title: string;
}) => {
  return (
    <div
      className={classNames('flex h-14 items-center gap-2 px-4', {
        'text-gray-400': !checked,
      })}
    >
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <AccordionTrigger
        className='p-0 text-base font-semibold'
        headerClassName='w-full'
      >
        {title}
      </AccordionTrigger>
    </div>
  );
};

export const AccordionContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <RawAccordionContent className='text-balance pb-0'>
      <div className='mx-4 border-t border-gray-400'></div>
      <div className='flex flex-col gap-4 px-4 py-5'>{children}</div>
    </RawAccordionContent>
  );
};

export const AccordionItemRoot = ({
  value,
  checked,
  children,
}: {
  value: string;
  checked: boolean;
  children: React.ReactNode;
}) => {
  return (
    <RawAccordionItem
      value={value}
      className={classNames('rounded-xl', {
        'border-2 border-gray-600 last:border-b-2': checked,
        'border border-gray-300 bg-gray-100 last:border-b': !checked,
      })}
    >
      {children}
    </RawAccordionItem>
  );
};
