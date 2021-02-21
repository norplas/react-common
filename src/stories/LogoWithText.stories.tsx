import React, { Fragment } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import LogoComponent from '../components/Logo';

export default {
  title: 'Components/Logo With Text',
  component: LogoComponent,
  argTypes: {
    color: { control: 'color' }
  }
} as Meta;


type LogoProps = {
  small: boolean,
  color?: string | undefined,
  text: string
}
const Template: Story<LogoProps> = ({ text, ...args }) => (
  <Fragment>

    <LogoComponent {...args} />
    <span>{text}</span>
  </Fragment>
)

export const LogoWithText = Template.bind({});
LogoWithText.args = {
  text: 'hello'
};

