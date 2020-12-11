export interface CardProps {
  title: string
  photoUrl: string
  desc: string
}

export const CardMarket: React.FC<CardProps> = ({ title, photoUrl, desc }) => (
  <div className="bg-white rounded-xl shadow-md w-96 p-4">
    <img className="rounded-lg h-52 w-full object-cover" src={photoUrl} alt={title} />
    <div className="mx-6 mt-6 mb-3">
      <h2 className="font-bold text-xl text-gray-800 mb-4">{title}</h2>
      <p className="font-medium text-gray-600 mb-4">{desc}</p>
      <p className="font-semibold text-primary">Voir les épiceries</p>
    </div>
  </div>
)
