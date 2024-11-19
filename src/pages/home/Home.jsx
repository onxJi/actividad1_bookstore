
import React from 'react'
import "./Home.css"

export const Home = () => {
  return (
    <div className='container__home'>
        <article className='container__home-welcome'>
            <div className="typing-effect">
                <span className="typing-text">Inicia una nueva Historia</span>
            </div>
        </article>
        <img src="./public/imgHome2.png" alt="imagen de inicio" className='imagen__inicio' />
    </div>
  )
}
