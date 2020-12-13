import Image from 'next/image'

export interface CardEtaCatProps {
  title: string
  photoUrl: string
}

export const CardEtaCat: React.FC<CardEtaCatProps> = (props) => (
  <div className="h-24 shadow-lg bg-white rounded-2xl flex items-center overflow-hidden">
    <div className="h-full w-24 rounded-2xl relative flex-none">
      <Image src={props.photoUrl} alt={props.title} layout="fill" objectFit="cover" quality="50" />
    </div>
    <p className="mx-6 font-bold">{props.title}</p>
  </div>
)
