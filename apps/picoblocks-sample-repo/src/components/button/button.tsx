import React from 'react';

export interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div className="p-8 cursor-pointer bg-red text-white">{children}</div>;
};

export default Button;
