import { FC } from 'react'
import s from './card-title.module.scss'
import Link from '@/assets/img/link.png'

type TCardTitleProps = {
  title: string
  place: string
  price: string
  fieldCount: string
}

export const CardTitle: FC<TCardTitleProps> = (props) => {
  const { title, place, price, fieldCount } = props

  return (
    <div className={s.container}>
      <div className={s.placeInfo}>
        <h2 className={s.placeInfo__title}>{title}</h2>
        <span className={s.placeInfo__place}>{place}</span>
      </div>
      <div className={s.costInfo}>
        <h3 className={s.costInfo__title}>{`от ${price} р.`}</h3>
        <span className={s.costInfo__text}>{`${fieldCount} участков`}</span>
        <div className={s.costInfo__link}>
          <img src={Link} />
        </div>
      </div>
    </div>
  )
}
