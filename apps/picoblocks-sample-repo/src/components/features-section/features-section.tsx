import React from 'react';
import FeatureItem from '../feature-item/feature-item';
import FeaturesHeader from '../features-header/features-header';

export const FeaturesSection: React.FC = () => {
  return (
    <div className="max-w-7xl px-4 sm:px-10 py-12">
      <FeaturesHeader eyebrow="Transactions" title="A better way to send money">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
        voluptatum cupiditate veritatis in accusamus quisquam.
      </FeaturesHeader>
      <div className="space-y-10 md:space-y-0 mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <FeatureItem title="Competitive exchange rates">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.{' '}
        </FeatureItem>{' '}
        <FeatureItem title="Competitive exchange rates">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.{' '}
        </FeatureItem>{' '}
        <FeatureItem title="Competitive exchange rates">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.{' '}
        </FeatureItem>{' '}
        <FeatureItem title="Competitive exchange rates">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.{' '}
        </FeatureItem>
      </div>
    </div>
  );
};

export default FeaturesSection;
