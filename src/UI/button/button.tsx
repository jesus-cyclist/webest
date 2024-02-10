import { ReactNode } from 'react'
import s from './button.module.scss'

type TButtonUI = {
  children: ReactNode
}

export const ButtonUI = (props: TButtonUI): JSX.Element => {
  const { children } = props

  return <button className={s.button}>{children}</button>
}
