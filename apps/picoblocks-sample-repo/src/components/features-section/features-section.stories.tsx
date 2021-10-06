import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FeaturesSection from './features-section';

export default {
  title: 'Sections/FeaturesSection',
} as Meta;

export const Default: Story = (args) => <FeaturesSection {...args} />;

Default.args = {};
