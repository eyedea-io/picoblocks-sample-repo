import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FeatureItem, { FeatureItemProps } from './feature-item';

export default {
  title: 'Components/FeatureItem',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xT1bWfKpkQEiURofNpQhgn/Website-Components-Example?node-id=4%3A335',
    },
  },
} as Meta;

export const Default: Story<FeatureItemProps> = () => (
  <FeatureItem title="Competitive exchange rates">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
    perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.{' '}
  </FeatureItem>
);
