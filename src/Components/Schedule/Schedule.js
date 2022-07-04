import React from 'react'
import './Schedule.scss'

function Schedule({ downloadApp }) {
  return (
    <div className="Schedule">
      <div className="Schedule_image">
        <div className="Schedule_image_gradient"></div>
        <div className="Schedule_image_png"></div>
      </div>

      <div className="Schedule_frame">
        <div className="Schedule_frame_group">
          <button className="Schedule_frame_group_button">
            <span>1</span>
          </button>
          <button className="Schedule_frame_group_button">
            <span>2</span>
          </button>
          <button className="Schedule_frame_group_button">
            <span>3</span>
          </button>
          <button className="Schedule_frame_group_button">
            <span>4</span>
          </button>
          <button className="Schedule_frame_group_button">
            <span>5</span>
          </button>
        </div>
        <div className="Schedule_frame_text-1">Составляй план тренировок</div>
        <div className="Schedule_frame_text-2">
          Описание основной фичи 3-4 строки, Описание основной фичи 3-4
          строки,Описание основной фичи 3-4 строки,Описание основной фичи 3-4
          строки,Описание основной фичи 3-4 строки,
        </div>
        <button onClick={downloadApp} className="Schedule_frame_button">
          Скачать приложение
        </button>
      </div>
      <div className="Schedule_phone">
        <div className="Schedule_phone_display"></div>
        <div className="Schedule_phone_rectangle-1"></div>
        <div className="Schedule_phone_rectangle-2"></div>
      </div>
    </div>
  )
}

export default Schedule
