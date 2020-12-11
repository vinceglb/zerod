import { CardMarket } from '../card/CardMarket'

export interface SectionPrefProps {
  className?: string | undefined
}

export const SectionMarket: React.FC<SectionPrefProps> = (props) => {
  const markets = [
    {
      title: 'Épiceries',
      photoUrl:
        'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      desc: 'All food used with full invoice and clear origin.',
    },
    {
      title: 'Marchés producteurs',
      photoUrl:
        'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      desc: 'All food used with full invoice and clear origin.',
    },
    {
      title: 'Commerces producteurs',
      photoUrl:
        'https://images.unsplash.com/photo-1596785231809-a90a89c0ef47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      desc: 'All food used with full invoice and clear origin.',
    },
  ]

  return (
    <section className={`flex justify-between w-full ${props.className}`}>
      {markets.map((m) => (
        <CardMarket key={m.title} title={m.title} photoUrl={m.photoUrl} desc={m.desc} />
      ))}
    </section>
  )
}
