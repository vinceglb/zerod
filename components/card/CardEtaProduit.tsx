import Image from 'next/image'

export interface CardEtaProduitProps {
  title: string
  price: string
  photoUrl: string
}

export const CardEtaProduit: React.FC<CardEtaProduitProps> = (props) => (
  <div className="group bg-white rounded-2xl shadow-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
    <h3 className="font-bold text-xl">{props.title}</h3>
    <p className="font-bold text-light-grey">{props.price}</p>
    <div className="h-36 rounded-xl relative overflow-hidden my-5">
      <Image src={props.photoUrl} alt={props.title} layout="fill" objectFit="cover" quality="50" />
    </div>
    <button className="h-10 border-2 w-full border-primary rounded-xl font-bold flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors focus:outline-none">
      Acheter
    </button>
  </div>
)
