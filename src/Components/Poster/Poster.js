import React from 'react'
import './Poster.scss'

function Poster() {
  return (
    <div className="Poster">
      <div className="Poster_image"></div>
      <div className="Poster_rectangle"></div>
      <div className="Poster_logo">
        <div className="Poster_logo_symbl"></div>
        <div className="Poster_logo_text"></div>
      </div>

      <div className="Poster_frame">
        <div className="Poster_frame_text-1">
          Занимайся, развивайся <br /> держи курс к цели
        </div>
        <div className="Poster_frame_text-2">
          Ходи в несколько фитнес-сетей, в любой клуб. <br /> Никаких
          ограничений
          {/* scss - (max-width: 740px) => text-2 >br {display: none} */}
        </div>
        <div className="Poster_frame_button">
          <div className="Poster_frame_button_text">Скачать приложение</div>
        </div>
      </div>
    </div>
  )
}

export default Poster
