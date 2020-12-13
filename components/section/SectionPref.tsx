import { CardPref } from '../card/CardPref'
import stylesHelper from './helper.module.css'

export interface SectionPrefProps {
  className?: string | undefined
}

export const SectionPref: React.FC<SectionPrefProps> = (props) => {
  const categories = [
    {
      title: 'Équilibré',
      photoUrl:
        'https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      title: 'Italien',
      photoUrl:
        'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Japonais',
      photoUrl:
        'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      title: 'Thailandais',
      photoUrl:
        'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Marocain',
      photoUrl:
        'https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ]

  return (
    <section className={props.className}>
      {/* Partie header */}
      <div className="flex justify-between items-center ">
        <div className="ml-6">
          <h1 className="font-bold text-reddish-brown text-2xl">Au menu du jour ?</h1>
          <p className="text-light-grey">Des catégories pour tous les goûts</p>
        </div>
        {/* <div>
          <p className="font-semibold text-primary">Tout afficher</p>
        </div> */}
      </div>

      {/* Partie liste */}
      <div className="max-w-full flex overflow-auto mt-4">
        <div className="flex space-x-4">
          {categories.map((cat) => (
            <CardPref
              key={cat.title}
              title={cat.title}
              photoUrl={cat.photoUrl}
              className={stylesHelper.container}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
