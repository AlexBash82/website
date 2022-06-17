import React from 'react'
import './Schedule.scss'

function Schedule() {
  return (
    <div className="Schedule">
      <div className="Schedule_image">
        <div className="Schedule_image_gradient"></div>
        <div className="Schedule_image_png"></div>
      </div>

      <div className="Schedule_frame">
        <div className="Schedule_frame_group">
          <div className="Schedule_frame_group_num">
            <div className="Schedule_frame_group_num_text">1</div>
          </div>
          <div className="Schedule_frame_group_num">
            <div className="Schedule_frame_group_num_text">2</div>
          </div>
          <div className="Schedule_frame_group_num">
            <div className="Schedule_frame_group_num_text">3</div>
          </div>
          <div className="Schedule_frame_group_num">
            <div className="Schedule_frame_group_num_text">4</div>
          </div>
          <div className="Schedule_frame_group_num">
            <div className="Schedule_frame_group_num_text">5</div>
          </div>
        </div>
        <div className="Schedule_frame_text-1">Составляй план тренировок</div>
        <div className="Schedule_frame_text-2">
          Описание основной фичи 3-4 строки, Описание основной фичи 3-4
          строки,Описание основной фичи 3-4 строки,Описание основной фичи 3-4
          строки,Описание основной фичи 3-4 строки,
        </div>
        <div className="Schedule_frame_button">
          <div className="Schedule_frame_button_text">Скачать приложение</div>
        </div>
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
