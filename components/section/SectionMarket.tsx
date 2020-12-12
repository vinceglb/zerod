import { CardMarket } from '../card/CardMarket'
import stylesHelper from './helper.module.css'

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
      title: 'Marchés',
      photoUrl:
        'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      desc: 'All food used with full invoice and clear origin.',
    },
    {
      title: 'Commerces',
      photoUrl:
        'https://images.unsplash.com/photo-1596785231809-a90a89c0ef47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      desc: 'All food used with full invoice and clear origin.',
    },
  ]

  return (
    <section className={props.className}>
      <div className="max-w-full flex overflow-auto py-2">
        <div className="flex space-x-8 lg:space-x-0 lg:w-full lg:justify-between">
          {markets.map((m) => (
            <CardMarket
              key={m.title}
              title={m.title}
              photoUrl={m.photoUrl}
              desc={m.desc}
              className={stylesHelper.container}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
