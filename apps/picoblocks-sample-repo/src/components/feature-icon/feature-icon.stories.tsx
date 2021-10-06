import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FeatureIcon from './feature-icon';

export default {
  title: 'Components/FeatureIcon',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xT1bWfKpkQEiURofNpQhgn/Website-Components-Example?node-id=4%3A331',
    },
  },
} as Meta;

export const Default: Story = (args) => <FeatureIcon {...args} />;
