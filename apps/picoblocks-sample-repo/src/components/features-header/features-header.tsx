import React from 'react';

export interface FeaturesHeaderProps {
  eyebrow: string;
  title: string;
}

export const FeaturesHeader: React.FC<FeaturesHeaderProps> = ({
  eyebrow,
  title,
  children,
}) => {
  return (
    <div className="lg:text-center">
      <h5 className="text-indigo-600 semibold16 uppercase tracking-wide">
        {eyebrow}
      </h5>
      <h2 className="text-gray-900 extrabold36 mt-2 text-2xl sm:text-3xl">
        {title}
      </h2>
      <p className="text-gray-500 regular20 mt-4">{children}</p>
    </div>
  );
};

export default FeaturesHeader;
