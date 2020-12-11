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
  title: 'Épiceries',
  desc: 'All food used with full invoice and clear origin.',
  photoUrl:
    'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
}
