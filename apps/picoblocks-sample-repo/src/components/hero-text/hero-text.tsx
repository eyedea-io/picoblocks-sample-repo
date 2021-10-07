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
    <section className="px-4 md:px-8 flex flex-col items-start sm:items-center lg:items-start">
      <h1 className="mb-5 text-left sm:text-center lg:text-justify">
        <span className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-10 sm:leading-12 md:leading-15">
          {title1}
        </span>
        <br />
        <span className="text-indigo-600 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-10 sm:leading-12 md:leading-15">
          {title2}
        </span>
      </h1>
      <p className="text-gray-500 mb-8 text-left sm:text-center lg:text-left mr-8 text-base sm:text-lg md:text-xl">
        {children}
      </p>
      <div className="flex justify-center lg:justify-start self-stretch flex-col sm:flex-row gap-3">
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
