import React from 'react';
import cx from 'classnames';

export type ButtonVariant = 'default' | 'white';

export interface ButtonProps {
  onClick?: () => void;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'default',
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        // 'py-5 px-8 cursor-pointer rounded-sm shadow-base transition-colors',
        'w-full sm:w-auto flex items-center shadow-base justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm md:py-4 md:text-lg md:px-10 leading-6 md:leading-7',
        {
          'text-white bg-indigo-600 hover:bg-indigo-700': variant === 'default',
          'bg-white text-indigo-600 hover:text-opacity-70': variant === 'white',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
