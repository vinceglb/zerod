import Image from 'next/image'

export interface CardMarketProps {
  title: string
  photoUrl: string
  desc: string
  className?: string | undefined
}

export const CardMarket: React.FC<CardMarketProps> = ({
  title,
  photoUrl,
  desc,
  className: custom,
}) => (
  <div className={custom}>
    <div className="bg-white rounded-xl shadow-md w-60 lg:w-72 p-4">
      <div className="rounded-lg h-32 lg:h-44 w-full relative overflow-hidden">
        <Image src={photoUrl} alt={title} layout="fill" objectFit="cover" quality="60" />
      </div>
      <div className="mx-2 mt-6 mb-2 flex flex-col">
        <h2 className="font-bold text-xl text-gray-800 mb-4">{title}</h2>
        <p className="font-medium text-gray-600 mb-4">{desc}</p>
        <p className="font-semibold text-primary">Voir les épiceries</p>
      </div>
    </div>
  </div>
)
