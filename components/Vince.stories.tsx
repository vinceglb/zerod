import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Vince } from '../components/Vince'

export default {
  title: 'Vince',
  component: Vince,
}

const Template: Story<ComponentProps<typeof Vince>> = (args) => <Vince {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
  text: 'Salut comment vas tu ? 🎉',
}
