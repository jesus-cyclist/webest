import { FC } from 'react'
import { CardFeature, TCardFeatureProps } from '../card-feature'
import s from './card-feature-list.module.scss'

type TCardFeatureListProps = {
  list: Array<TCardFeatureProps>
}

export const CardFeatureList: FC<TCardFeatureListProps> = (props) => {
  const { list } = props

  return (
    <div className={s.list}>
      {list.map(({ title, description, icon, info }) => (
        <CardFeature
          title={title}
          description={description}
          icon={icon}
          info={info}
        />
      ))}
    </div>
  )
}
