import React from 'react';
import hand from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import TextHero from '../Assets/hero_image.png';
import './Hero.css';

function Hero()
{
    return(
        <div className='hero'>
            <div className='hero-left'>
                <h2>New Arrival Only</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New Collections</p>
                        <img src={hand} alt='Hand icon' />
                        
                    </div>
                    <p>For Everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collections</div>
                    <img src={arrow} alt='arrow' />

                </div>
            </div>
            <div className='hero-right'>
                <img src={TextHero} alt='text hero' />
            </div>
        </div>
    )
}

export default Hero