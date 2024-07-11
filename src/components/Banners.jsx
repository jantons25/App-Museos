import React from 'react'
import '../styles/banners.css'

function Banners({img,left,museo,ciudad, descripcion, actualizarVista}) {
  const arrayVista = [ciudad, museo,descripcion, img]
  return(
    <div className="banners" style={{backgroundImage: `url(${img})`, left: `${left}` }} onClick={() => actualizarVista(arrayVista)}>
      <div className='banners__text'>
        <p>{ciudad}</p>
        <h1 style={{color: `white`, fontSize: `1.3rem`}}>{museo}</h1>
      </div>
    </div>
  )
}

export default Banners