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
        </div>
      </div>
    </div>
  )
}
