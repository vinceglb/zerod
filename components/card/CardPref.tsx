export interface CardPrefProps {}

export const CardPref: React.FC<CardPrefProps> = () => (
  <div className="w-96 pt-4 flex flex-col items-center">
    <img
      className="rounded-lg shadow-lg h-52 w-52 object-cover"
      src="https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      alt="test"
    />

    <h2 className="font-bold text-gray-800 text-2xl mt-4">Équiliré</h2>
  </div>
)
