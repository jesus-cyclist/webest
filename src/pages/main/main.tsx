import styles from './main.module.scss'
import { Card } from '@/modules/card'

export const Main = () => {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  )
}
