import React from 'react'
import './CreationCardMobile.css'


function CreationCardMobile({ key, image, alt, title }) {
  return (
    <div className='card-mobile'>
            <div className='card-overlay-mobile'>
                <img src={image} alt={alt} />
                <h2>{title}</h2>
            </div>
        </div>
  )
}

export default CreationCardMobile