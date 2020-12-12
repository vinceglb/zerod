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
      <img className="rounded-lg shadow-lg h-36 w-36 object-cover" src={photoUrl} alt={title} />
      <h2 className="font-bold text-gray-800 mt-4">{title}</h2>
    </div>
  </div>
)
