import { FC } from 'react'
import s from './card-text.module.scss'
import Angle from '@/assets/img/angle.png'

type TCardTextProps = {
  title: string
  text: string
}

export const CardText: FC<TCardTextProps> = (props) => {
  const { title, text } = props

  return (
    <div className={s.description}>
      <h2 className={s.description__title}>{title}</h2>
      <div className={s.description__body}>
        <span className={s.description__text}>{text}</span>
        <button className={s.description__something}>...</button>
        <div className={s.description__link}>
          <a href='#'>Подробнее</a>
          <div className={s.description__icon}>
            <img src={Angle} alt='button icon' />
          </div>
        </div>
      </div>
    </div>
  )
}
