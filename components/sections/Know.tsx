import Image from 'next/image'
import React from 'react'

export const Know = () => {
  return (
    <div className='know'>
      <div className='container'>
        <div className='content'>
          <h2>GET TO KNOW ME</h2>
          <div className='img'>
            <Image src={"/images/esteviejocachondohijodeputacogecomountorosinusarpastillas.jpg"} width={200} objectFit={"cover"} height={200} alt='Sergio Peñaloza' />
          </div>
          <div className='cards'>
            <div className='card_know'>
              <span className='icon'><i className="ri-user-line"></i></span>
              <h3>WHO AM I?</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
            </div>
            <div className='card_know'>
              <span className='icon'><i className="ri-flag-line"></i></span>
              <h3>WHAT DO I DO?</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
            </div>
            <div className='card_know'>
              <span className='icon'><i className="ri-award-line"></i></span>
              <h3>HOW DO I DO IT?</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
