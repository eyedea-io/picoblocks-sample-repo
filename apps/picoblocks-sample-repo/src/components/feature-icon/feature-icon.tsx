import React from 'react';
import { ReactComponent as FeatureIconSvg } from './feature-icon.svg';

export const FeatureIcon: React.FC = () => {
  return (
    <div className="rounded-sm bg-indigo-500 w-12 h-12 flex justify-center items-center text-white">
      <FeatureIconSvg />
    </div>
  );
};

export default FeatureIcon;
