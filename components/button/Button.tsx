export interface ButtonProps {
  className?: string | undefined
  onClick?: (event: React.MouseEvent) => void | undefined
  small?: boolean
  text?: boolean
  underline?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  className: customClasses,
  children,
  onClick,
  small,
  text,
  underline,
}) => (
  <button
    className={`
      ${!text && 'bg-primary'}
      ${small ? 'py-2 px-6' : 'py-3 px-11 text-2xl'}
      rounded-full
      ${customClasses}
    `}
    onClick={onClick}
  >
    <div
      className={`
    button-content 
    ${text ? 'text-primary' : 'text-white'}
    ${underline && `underline`}
    font-bold
    `}
    >
      {children}
    </div>
  </button>
)
