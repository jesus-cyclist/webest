import s from './card-contacts.module.scss'

export const CardContacts = () => {
  return (
    <div className={s.contacts}>
      <div className={s.contacts__body}>
        <h3 className={s.contacts__title}>Есть вопрос по КП?</h3>
        <span className={s.contacts__booking}>Отдел бронирования</span>
        <div className={s.contacts__call}>
          <span className={s.contacts__telephone}>8 (800) 600-62-16</span>
          <span className={s.contacts__text}>(бесплатно по РФ)</span>
        </div>
      </div>

      <button className={s.contacts__button}>Спросить в телеграм</button>
    </div>
  )
}
