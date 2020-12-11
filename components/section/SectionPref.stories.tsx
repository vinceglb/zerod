import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { SectionPref } from './SectionPref'

export default {
  title: 'SectionPref',
  component: SectionPref,
}

const Template: Story<ComponentProps<typeof SectionPref>> = (args) => <SectionPref {...args} />

export const Default = Template.bind({})
Default.args = {}
