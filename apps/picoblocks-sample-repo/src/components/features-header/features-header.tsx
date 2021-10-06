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
    <div className="text-center">
      <h5 className="text-indigo-600 mb-2 semibold16 uppercase">{eyebrow}</h5>
      <h2 className="text-gray-900 extrabold36 mb-4">{title}</h2>
      <p className="text-gray-500 regular20">{children}</p>
    </div>
  );
};

export default FeaturesHeader;
