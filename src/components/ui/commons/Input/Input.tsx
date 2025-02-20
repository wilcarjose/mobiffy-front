import type { InputHTMLAttributes } from 'react';
import React from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeClass?: string;
  fontClass?: string;
  rounded?: string;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      sizeClass = 'h-11 px-4 py-3',
      fontClass = 'text-sm font-normal',
      rounded = 'rounded-full',
      type = 'text',
      ...args
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`block w-full focus:ring focus:ring-transparent focus:ring-opacity-25 disabled:bg-neutral-800 ${rounded} ${fontClass} ${sizeClass} ${className}`}
        {...args}
      />
    );
  },
);

export default Input;
