import { useRouter } from 'next/router'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'

interface ReturnBtnProps {
  className?: string
}

export const ReturnBtn: React.FC<ReturnBtnProps> = ({ className: customClassName }) => {
  const router = useRouter()
  return (
    <button
      className={`max-w-xs bg-secondary text-primary rounded-full flex items-center text-sm p-3 hover:bg-primary hover:text-secondary transition focus:outline-none ${customClassName}`}
      id="cart-menu"
      aria-haspopup="true"
      onClick={() => router.back()}
    >
      <span className="sr-only">Voir le panier</span>
      <Icon path={mdiArrowLeft} size="1.5rem" />
    </button>
  )
}
