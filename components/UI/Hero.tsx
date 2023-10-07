import React from 'react'
import { Button } from '.'

export const Hero = () => {
    return (
        <section className='hero hero_home'>
            <img className='bg' src="./images/loop.gif" alt="" />
            <div className='container'>
                <div className='content'>
                    <h1>SERGIO PEÑALOZA</h1>
                    <p>GAME TECHNICAL ARTIST / PROJECT SEED LEAD VFX ARTIST</p>
                    <div className='botones'>
                        <Button link='/proyectos'>Visit Portfolio</Button>
                        <Button type='secondary'><i className="ri-play-circle-line pe-1"></i>Play Showreel</Button>
                    </div>
                </div>
            </div>
            <div className='effect_info'>
                <p className='font-overpass'>Name of the VFX here</p>
                <p className='font-overpass'>Little description of the VFX here</p>
            </div>
        </section>
    )
}
