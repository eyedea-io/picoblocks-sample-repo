import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeroText, { HeroTextProps } from './hero-text';

export default {
  title: 'Components/HeroText',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xT1bWfKpkQEiURofNpQhgn/Website-Components-Example?node-id=4%3A104',
    },
  },
} as Meta;

export const Default: Story<HeroTextProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <HeroText
      {...args}
      title1="Data to enrich your"
      title2="online business"
      buttons={[
        { label: 'Get started', primary: true },
        { label: 'Live demo' },
      ]}
    >
      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
      cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
    </HeroText>
  </div>
);

Default.args = {};
