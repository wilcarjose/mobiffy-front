import React from 'react';

import type { ButtonProps } from '@/components/ui/commons/Button/Button';
import Button from '@/components/ui/commons/Button/Button';

export interface ButtonSecondaryProps extends ButtonProps {
  href?: any;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = '',
  ...args
}) => {
  return <Button className={`${className}`} {...args} />;
};

export default ButtonSecondary;
