import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FeaturesSection from './features-section';

export default {
  title: 'Sections/FeaturesSection',
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xT1bWfKpkQEiURofNpQhgn/Website-Components-Example?node-id=7%3A116',
    },
  },
} as Meta;

export const Default: Story = (args) => <FeaturesSection {...args} />;

Default.args = {};
