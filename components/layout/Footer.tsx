import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='container'>

        <div className='content'>
          <h2>SERGIO PEÑALOZA</h2>
          <span className='line-v'></span>
          <div className='d-flex align-items-center nav'>
            <Link href="/proyectos">
              Work
            </Link>
            <Link href="/proyectos">
              About
            </Link>
            <Link href="/proyectos">
              Contact
            </Link>
          </div>
        </div>
        <span className='line-h'></span>
        <div className='post'>
          <p>Copyright © 2023 Sergio Peñaloza</p>
          <span className='line-v'></span>
          <div className='redes'>
            <p>Follow me:</p>
            <a href="https://www.instagram.com/checholiolin/" target='_blank'><i className="ri-instagram-fill"></i></a>
            <a href="https://www.artstation.com/xexolio" target='_blank'><img src="./images/artstation.svg" alt="" /></a>
            <a href="https://www.linkedin.com/in/sergio-pe%C3%B1aloza-herrera-137436183/" target='_blank'><i className="ri-linkedin-box-fill"></i></a>
          </div>
        </div>
      </div>

    </footer>
  )
}
