export interface CardProps {
  title: string
  photoUrl: string
  desc: string
  className?: string | undefined
}

export const CardMarket: React.FC<CardProps> = ({ title, photoUrl, desc, className: custom }) => (
  <div className={custom}>
    <div className="bg-white rounded-xl shadow-md w-60 p-4">
      <img className="rounded-lg h-32 w-full object-cover" src={photoUrl} alt={title} />
      <div className="mx-2 mt-6 mb-2 flex flex-col">
        <h2 className="font-bold text-xl text-gray-800 mb-4">{title}</h2>
        <p className="font-medium text-gray-600 mb-4">{desc}</p>
        <p className="font-semibold text-primary">Voir les épiceries</p>
      </div>
    </div>
  </div>
)
