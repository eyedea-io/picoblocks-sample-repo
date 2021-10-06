import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeroSection from './hero-section';

export default {
  title: 'Sections/HeroSection',
} as Meta;

export const Default: Story = (args) => <HeroSection {...args} />;

Default.args = {};
