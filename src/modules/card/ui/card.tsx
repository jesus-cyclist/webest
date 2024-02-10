import Road from '@/assets/img/road.png'
import View_1_desk from '@/assets/img/view_1_desk.png'
import View_1_mobile from '@/assets/img/view_1_mob.png'
import View_1_mobile_drink from '@/assets/img/view_1_mob_1.jpg'
import View_2_desk from '@/assets/img/view_2_sec_desk.png'
import View_2_mob from '@/assets/img/view_2_sec_mob.png'
import View_3_desk from '@/assets/img/view_3_sec_desk.png'
import View_3_mob from '@/assets/img/view_3_sec_mob.png'
import View_4_desk from '@/assets/img/view_4_sec_desk.png'
import View_4_mob from '@/assets/img/view_4_sec_mob.png'
import View_5_desk from '@/assets/img/view_5_sec_desk.png'
import {
  CardContacts,
  CardFeatureList,
  CardText,
  CardTitle,
} from '../components'
import { CardGalery } from '../components/card-galery'
import s from './card.module.scss'

const list = [
  {
    title: 'север',
    description: 'Направление',
    icon: Road,
    info: false,
  },
  {
    title: '20 км',
    description: 'Расстояние от КАД',
    icon: Road,
    info: false,
  },
  {
    title: 'СНТ, ДНП',
    description: 'Статус земли',
    icon: Road,
    info: true,
  },
  {
    title: '1-я Академия недвижимость',
    description: 'Застройщик',
    icon: Road,
    info: false,
  },
]
const titleImage = { image: View_1_desk, imageMobile: View_1_mobile }

const images = [
  { image: View_2_desk, imageMobile: View_2_mob },
  { image: View_3_desk, imageMobile: View_3_mob },
  { image: View_4_desk, imageMobile: View_4_mob },
  { image: View_5_desk, imageMobile: View_1_mobile_drink },
]

export const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.header}>
        <CardTitle
          title={'Озерный край'}
          place={
            'Московская область, Рузский городской округ, территория Рузская долина'
          }
          price={'1 560 000'}
          fieldCount={'38'}
        />
        <CardGalery images={images} titleImage={titleImage} />
      </div>

      <div className={s.description}>
        <CardFeatureList list={list} />
        <CardText
          text='Жилой комплекс «Петровская Доминанта» представляет собой 3 жилых корпуса высотой от 7 до 9 этажей. При отделке фасадов использованы клинкерный кирпич, натуральный камень, черненый металл, стекло, декоративные элементы. Проект разработан архитектурном бюро «INTERCOLUMNIUM». Комплекс выполнен в стиле классической архитектуры Санкт-Петербурга конца XIX — начала XX веков. В ЖК представлены от одно- до семикомнатных квартир как классического типа, так и евроформата. Высота потолков начинается от 3 метров. К покупке предложены квартиры без отделки. Возможно приобретение квартир с панорамным остеклением, террасами-патио, видовыми террасами и крытыми зимними садами.'
          title='О коттеджном поселке'
        />
        <CardContacts />
      </div>
    </div>
  )
}
