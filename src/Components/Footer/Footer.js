import React from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import './Footer.scss'

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    alert('I am here: Components/Footer/Footer.js 16:5')
  }

  return (
    <div className="Footer">
      <div className="Footer_box">
        <div className="Footer_box_col-1">
          <div className="Footer_box_col-1_img"></div>
          <div className="Footer_box_col-1_text-1">
            Псс, хочешь себе
            <br /> это приложение?
          </div>
          <div className="Footer_box_col-1_text-2">
            У тебя свой клуб или больше, но нет ПО для клиентов и персонала,
            обращайся все расскажем и покажем
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="Footer_box_form">
          <div className="Footer_box_form_container">
            <input
              placeholder=" "
              className="Footer_box_form_container_input"
              {...register('firstname', {
                pattern: /^[A-Za-zА-Яа-я]+$/i,
              })}
            />
            <label className="Footer_box_form_container_label">Имя</label>
          </div>
          <div className="Footer_box_form_container">
            <InputMask
              placeholder=" "
              className={`Footer_box_form_container_input ${
                errors?.phone ? 'border-error' : ''
              } `}
              type="tel"
              mask="+7(999)-999-99-99"
              {...register('phone', {
                required: true,
              })}
            />
            <label
              className={`Footer_box_form_container_label ${
                errors?.phone ? 'color-error' : ''
              } `}
            >
              Телефон
            </label>
          </div>

          <button
            type="submit"
            value=""
            className={`Footer_box_form_button ${
              isSubmitSuccessful ? 'succes' : ''
            }`}
          >
            {isSubmitSuccessful ? 'Заявка отправлена' : 'Оставить заявку'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Footer
