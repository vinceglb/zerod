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
  <div className={`pt-4 w-52 flex flex-col items-center ${customClasses}`}>
    <img className="rounded-lg shadow-lg h-52 w-52 object-cover" src={photoUrl} alt={title} />
    <h2 className="font-bold text-gray-800 text-2xl mt-4">{title}</h2>
  </div>
)
