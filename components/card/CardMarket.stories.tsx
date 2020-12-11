import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { CardMarket } from './CardMarket'

export default {
  title: 'CardMarket',
  component: CardMarket,
}

const Template: Story<ComponentProps<typeof CardMarket>> = (args) => <CardMarket {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'salut',
}
