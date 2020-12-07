import React from 'react'

export interface ComposantTestProps {
  text: string
}

export const ComposantTest: React.FC<ComposantTestProps> = ({ text }) => (
  <div>
    <h1>Hello mon gars !</h1>
    <p>{text}</p>
  </div>
)
