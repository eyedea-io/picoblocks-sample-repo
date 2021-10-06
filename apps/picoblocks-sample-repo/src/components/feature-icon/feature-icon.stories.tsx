import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FeatureIcon from './feature-icon';

export default {
  title: 'Components/FeatureIcon',
} as Meta;

export const Default: Story = (args) => <FeatureIcon {...args} />;
