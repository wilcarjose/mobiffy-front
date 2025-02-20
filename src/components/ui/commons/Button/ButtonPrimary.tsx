import React from 'react';

import type { ButtonProps } from '@/components/ui/commons/Button/Button';
import Button from '@/components/ui/commons/Button/Button';

export interface ButtonPrimaryProps extends ButtonProps {
  href?: any;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = '',
  ...args
}) => {
  return (
    <Button
      className={`rounded-full bg-primary text-white hover:bg-primary/80 disabled:bg-opacity-70 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
