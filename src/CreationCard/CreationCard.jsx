import React from 'react'
import './CreationCard.css'

function CreationCard({ key, image, alt, title }) {
    return (
        <div className='card'>
            <div className='card-overlay'>
                <img src={image} alt={alt} />
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default CreationCard