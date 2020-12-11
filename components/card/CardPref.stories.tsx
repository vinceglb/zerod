import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { CardPref } from './CardPref'

export default {
  title: 'CardPref',
  component: CardPref,
}

const Template: Story<ComponentProps<typeof CardPref>> = (args) => <CardPref {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Équilibré',
  photoUrl:
    'https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
}
