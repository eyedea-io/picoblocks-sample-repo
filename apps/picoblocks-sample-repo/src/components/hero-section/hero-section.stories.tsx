import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeroSection from './hero-section';

export default {
  title: 'Sections/HeroSection',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xT1bWfKpkQEiURofNpQhgn/Website-Components-Example?node-id=4%3A120',
    },
  },
} as Meta;

export const Default: Story = (args) => <HeroSection {...args} />;

Default.args = {};
