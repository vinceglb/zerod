import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { CardPref } from './CardPref'

export default {
  title: 'CardPref',
  component: CardPref,
}

const Template: Story<ComponentProps<typeof CardPref>> = (args) => <CardPref {...args} />

export const Default = Template.bind({})
Default.args = {}
