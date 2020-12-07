import React from 'react'

export interface VinceProps {
  text: string
}

export const ComposantTest: React.FC<VinceProps> = ({ text }) => (
  <div>
    <h1>Hello mon gars !</h1>
    <p>{text}</p>
  </div>
)
