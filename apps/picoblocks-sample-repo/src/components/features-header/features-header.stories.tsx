import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FeaturesHeader, { FeaturesHeaderProps } from './features-header';

export default {
  title: 'Components/FeaturesHeader',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xT1bWfKpkQEiURofNpQhgn/Website-Components-Example?node-id=4%3A341',
    },
  },
} as Meta;

export const Default: Story<FeaturesHeaderProps> = (args) => (
  <FeaturesHeader
    {...args}
    eyebrow="Transactions"
    title="A better way to send money"
  >
    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
    voluptatum cupiditate veritatis in accusamus quisquam.
  </FeaturesHeader>
);

Default.args = {};
