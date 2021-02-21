import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import LogoComponent, { LogoType } from '../components/Logo';

export default {
  title: 'Components/Logo',
  component: LogoComponent,
  argTypes: {
    color: { control: 'color' }
  }
} as Meta;

const Template: Story<LogoType> = (args) => <LogoComponent {...args} />;

export const Logo = Template.bind({});
Logo.args = {

};
