import React from 'react';
import cx from 'classnames';

export type ButtonVariant = 'default' | 'white';

export interface ButtonProps {
  onClick?: () => void;
  variant?: ButtonVariant;
  full?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  full,
  variant = 'default',
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        'py-5 px-8 cursor-pointer rounded-sm shadow-base transition-colors',
        {
          'w-full': full,
          'bg-indigo-600 text-white hover:bg-opacity-70': variant === 'default',
          'text-indigo-600 bg-white hover:text-opacity-70': variant === 'white',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
