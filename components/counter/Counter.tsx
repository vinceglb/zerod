import Icon from '@mdi/react'
import { mdiPlus, mdiMinus } from '@mdi/js'
import { useState } from 'react'

interface CounterButtonProps {
  onClick?: () => void
}

const CounterButton: React.FC<CounterButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="text-primary flex justify-center items-center focus:outline-none hover:bg-primary hover:text-secondary transition"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface CounterProps {
  className?: string
  orientation: 'vertical' | 'horizontal'
  onDecrement?: (value: number) => void
  onIncrement?: (value: number) => void
  onChange?: (value: number) => void
}

export const Counter: React.FC<CounterProps> = ({
  className: customClasses,
  orientation,
  onChange: propOnChange,
  onDecrement: propOnDecrement,
  onIncrement: propOnIncrement,
}) => {
  const [value, setValue] = useState(1)

  const onDecrement = (): void => {
    const newValue = value - 1
    if (value > 1) setValue(newValue)
    propOnDecrement && propOnDecrement(newValue)
    propOnChange && propOnChange(newValue)
  }

  const onIncrement = (): void => {
    const newValue = value + 1
    setValue(newValue)
    propOnIncrement && propOnIncrement(newValue)
    propOnChange && propOnChange(newValue)
  }

  return (
    <div
      className={`
      bg-secondary
      rounded-lg
      overflow-hidden
      grid
      ${orientation === 'vertical' && 'grid-rows-3'}
      ${orientation === 'horizontal' && 'grid-cols-3'}
      ${customClasses}
    `}
    >
      <CounterButton onClick={onDecrement}>
        <Icon path={mdiMinus} size="1rem" />
      </CounterButton>
      <div className="text-dark-grey font-bold flex justify-center items-center">{value}</div>
      <CounterButton onClick={onIncrement}>
        <Icon path={mdiPlus} size="1rem" />
      </CounterButton>
    </div>
  )
}
