import Image from 'next/image'
import Link from 'next/link'

export interface CardEtaProps {
  title: string
  photoUrl: string
  spe: string
  price: string
  className?: string | undefined
}

export const CardEta: React.FC<CardEtaProps> = ({
  title,
  photoUrl,
  spe,
  price,
  className: custom,
}) => (
  <Link href="/etablissement">
    <div className={custom}>
      <div className="h-52 shadow-lg rounded-lg relative overflow-hidden">
        <Image src={photoUrl} alt={title} layout="fill" objectFit="cover" quality="50" />
      </div>

      <div className="mt-4 mb-3">
        <h2 className="font-bold text-xl text-gray-800 mb-1">{title}</h2>
        <p>Horaires : 12h-14h / 18h-20h</p>
        <div className="bg-gray-400 h-px my-1" />
        <div className="flex justify-between">
          <p>{spe}</p>
          <p className="flex-none">{price}</p>
        </div>
      </div>
    </div>
  </Link>
)
