import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import { ComposantTest } from './ComposantTest'

export default {
  title: 'ComposantTest',
  component: ComposantTest,
}

const Template: Story<ComponentProps<typeof ComposantTest>> = (args) => <ComposantTest {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
  text: 'Salut comment vas tu ? 🎉',
}
