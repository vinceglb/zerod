import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { SectionMarket } from './SectionMarket'

export default {
  title: 'SectionMarket',
  component: SectionMarket,
}

const Template: Story<ComponentProps<typeof SectionMarket>> = (args) => <SectionMarket {...args} />

export const Default = Template.bind({})
Default.args = {}
