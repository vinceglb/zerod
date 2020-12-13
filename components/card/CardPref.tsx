import Image from 'next/image'
export interface CardPrefProps {
  title: string
  photoUrl: string
  className?: string | undefined
}

/**
 * Carte préférence
 */
export const CardPref: React.FC<CardPrefProps> = ({
  title,
  photoUrl,
  className: customClasses,
}) => (
  <div className={customClasses}>
    <div className="pt-4 w-36 flex flex-col items-center">
      <div className="rounded-lg shadow-lg h-36 w-36 relative overflow-hidden">
        <Image src={photoUrl} alt={title} width="144" height="144" objectFit="cover" quality="60" />
      </div>
      <h2 className="font-bold text-gray-800 mt-4">{title}</h2>
    </div>
  </div>
)
