import React from 'react'
import { Button } from '.'

export const HeroLittle = () => {
    return (
        <section className='hero hero_little'>
            <img className='bg' src="./images/loop.gif" alt="" />
            <div className='content'>
                <h1>SERGIO PEÑALOZA</h1>
                <p>GAME TECHNICAL ARTIST / PROJECT SEED LEAD VFX ARTIST</p>
            </div>
            <div className='effect_info'>
                <p className='font-overpass'>Name of the VFX here</p>
                <p className='font-overpass'>Little description of the VFX here</p>
            </div>
        </section>
    )
}
