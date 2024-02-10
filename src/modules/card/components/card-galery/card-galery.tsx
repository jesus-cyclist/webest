import { FC } from 'react'
import s from './card-galery.module.scss'
import { ButtonUI } from '@/UI'
import Angle from '@/assets/img/angle.png'

type TImage = {
  image: string
  imageMobile: string
}

type TCardGaleryProps = {
  titleImage: TImage
  images: Array<TImage>
}

export const CardGalery: FC<TCardGaleryProps> = (props) => {
  const { images, titleImage } = props

  return (
    <div className={s.galery}>
      <div className={s.titleImage}>
        <img
          src={titleImage.image}
          srcSet={`${titleImage.imageMobile} 576w, ${titleImage.image} 1000w`}
          alt='image description'
        />
        <div className={s.titleImage__control}>
          <button>
            <img src={Angle} alt='arrow' />
          </button>
          <button>
            <img src={Angle} alt='arrow' />
          </button>
        </div>
      </div>

      <div className={s.subImage}>
        {images.map(({ image, imageMobile }) => (
          <div className={s.subImage__item}>
            <img
              src={image}
              srcSet={`${imageMobile} 576w, ${image} 1000w`}
              alt='image description'
            />
          </div>
        ))}
      </div>

      <div className={s.controlPanel}>
        <div className={s.controlPanel__left}>
          <ButtonUI>
            <span>Ген. план</span>
          </ButtonUI>
          <ButtonUI>
            <span>Панорама</span>
          </ButtonUI>
        </div>
        <ButtonUI>
          <span>Все фото</span>
        </ButtonUI>
      </div>
    </div>
  )
}
