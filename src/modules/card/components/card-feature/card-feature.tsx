import Info from '@/assets/img/info.png'
import { FC } from 'react'
import s from './card-feature.module.scss'

export type TCardFeatureProps = {
  title: string
  description: string
  icon: string
  info: boolean
}

export const CardFeature: FC<TCardFeatureProps> = (props) => {
  const { title, description, icon, info } = props

  return (
    <div className={s.card}>
      <div className={s.card__icon}>
        <img src={icon} alt='description icon' />
      </div>
      <div className={s.card_description}>
        <div className={s.card__header}>
          <h3 className={s.card__title}>{title}</h3>
          {info && (
            <div className={s.card__info}>
              <img src={Info} alt='more info' />
            </div>
          )}
        </div>

        <span className={s.card__text}>{description}</span>
      </div>
    </div>
  )
}
