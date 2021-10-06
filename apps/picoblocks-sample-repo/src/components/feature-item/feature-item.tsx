import React from 'react';
import FeatureIcon from '../feature-icon/feature-icon';

export interface FeatureItemProps {
  title: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  children,
  title,
}) => {
  return (
    <div className="flex gap-4">
      <div>
        <FeatureIcon />
      </div>
      <article>
        <h4 className="medium18 mb-2">{title}</h4>
        <p className="regular16 text-gray-500">{children}</p>
      </article>
    </div>
  );
};

export default FeatureItem;
