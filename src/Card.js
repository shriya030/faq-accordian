import React from 'react';
import FAQ from './FAQ';
import './Card.css';
import illMobile from './images/illustration-woman-online-mobile.svg';
import illDesktop from './images/illustration-woman-online-desktop.svg';
import bgMobile from './images/bg-pattern-mobile.svg';
import bgDesktop from './images/bg-pattern-desktop.svg';
import boxImage from './images/illustration-box-desktop.svg';

function Card() {
    return (
        <div className='card'>
            <div className="image-container">
                <div className="inner">
                    <picture>
                        <source srcSet={illMobile} media="(max-width:890px)" />
                            <img src={illDesktop} alt="" />
                    </picture>
                    <picture>
                        <source srcSet={bgMobile} media="(max-width:890px)" />
                            <img className='sec-img' src={bgDesktop} alt="" />
                    </picture>
                </div>
                <div className="outer">
                    <img src={boxImage} alt="" />
                </div>
            </div>
            <FAQ />
        </div>
    )
}

export default Card
