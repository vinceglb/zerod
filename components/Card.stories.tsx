import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Card } from './Card'

export default {
  title: 'Card',
  component: Card,
}

const Template: Story<ComponentProps<typeof Card>> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'salut',
}
