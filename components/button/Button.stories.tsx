import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    children: 'Valider',
    className: '',
    onClick: undefined,
  },
}

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args}></Button>

export const Default = Template.bind({})

export const LilButton = Template.bind({})
LilButton.args = {
  small: true,
}

export const Underline = Template.bind({})
Underline.args = {
  underline: true,
  text: true,
}

export const TextButton = Template.bind({})
TextButton.args = {
  text: true,
}
