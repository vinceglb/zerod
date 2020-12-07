import React from 'react'

export interface VinceProps {
  text: string
}

export const Vince: React.FC<VinceProps> = ({ text }) => (
  <div>
    <h1>Hello Vince !</h1>
    <p>{text}</p>
  </div>
)
