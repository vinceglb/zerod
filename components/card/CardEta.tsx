export interface CardEtaProps {}

export const CardEta: React.FC<CardEtaProps> = () => (
  <div className="w-96 pt-4">
    <img
      className="rounded-lg shadow-lg h-52 w-full object-cover"
      src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      alt="test"
    />

    <div className="mt-6 mb-3">
      <h2 className="font-bold text-2xl text-gray-800 mb-2">Le Paradis Gourmet</h2>
      <p className="font-medium">Horaires : 12h-14h / 18h-20h</p>
      <div className="bg-gray-400 h-px my-2" />
      <div className="flex justify-between font-medium">
        <p>Spécialités régionales • Vins • Épices</p>
        <p>€€</p>
      </div>
    </div>
  </div>
)
