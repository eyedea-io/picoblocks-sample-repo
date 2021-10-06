import React from 'react';
import Button from '../button/button';

export interface HeroTextProps {
  title1: string;
  title2: string;
  buttons: {
    label: string;
    action?: () => void;
    primary?: boolean;
  }[];
}

export const HeroText: React.FC<HeroTextProps> = ({
  title1,
  title2,
  buttons,
  children,
}) => {
  return (
    <section className="px-8">
      <h1 className="mb-5">
        <span className="text-gray-900 extrabold60">{title1}</span>
        <br />
        <span className="text-indigo-600 extrabold60">{title2}</span>
      </h1>
      <p className="regular20 text-gray-500 mb-8">{children}</p>
      <div className="flex gap-3">
        {buttons.map((button, index) => (
          <Button
            onClick={button.action}
            variant={button.primary ? 'default' : 'white'}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default HeroText;
