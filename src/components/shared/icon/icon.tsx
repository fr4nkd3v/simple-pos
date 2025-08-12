import { iconsMap, type IIconProps } from './icon.types';

export const Icon = ({ name, className = '' }: IIconProps) => {
  const IconComponent = iconsMap[name];

  return (
    <i className={`flex ${className}`}>
      <IconComponent className='h-full w-full' />
    </i>
  );
};
