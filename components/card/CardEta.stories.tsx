import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { CardEta } from './CardEta'

export default {
  title: 'CardEta',
  component: CardEta,
}

const Template: Story<ComponentProps<typeof CardEta>> = (args) => <CardEta {...args} />

export const Default = Template.bind({})
Default.args = {}
