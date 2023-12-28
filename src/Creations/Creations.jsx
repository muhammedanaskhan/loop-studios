import React from 'react'
import './Creations.css'
import desktopCardsData from '../assets/desktopCardsData'
import CreationCard from '../CreationCard/CreationCard'
import mobileCardsData from '../assets/mobileCardsData'
import CreationCardMobile from '../CreationCardMobile/CreationCardMobile'

function Creations() {
  return (
      <div className='main'>
          <div className='top-section'>
              <h1>Our Creations</h1>
              <button>see all</button>
          </div>
          <div className='cards-section'>
              {desktopCardsData.map((item, index) => {
                  return (
                      <CreationCard
                          key={index}
                          image={item.image}
                          alt={item.alt}
                          title={item.title}
                      />
                  )
              })}
          </div>
          <div className='cards-section-mobile'>
              {mobileCardsData.map((item, index) => {
                  return (
                      <CreationCardMobile
                          key={index}
                          image={item.image}
                          alt={item.alt}
                          title={item.title}
                      />
                  )
              })}
          </div>
          <button className='mobile-button'>see all</button>
      </div>
  )
}

export default Creations