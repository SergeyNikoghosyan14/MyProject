import React from 'react'
import './AboutPage.css'
import Title from '../../components/Title/Title'
import galactic from './galactic.jpg'
import Likes from '../../components/Likes/likes'
import Comments from '../../components/Comments/Comments'

export default function AboutPage(){
    return(
        <div className='about'>
            <div className='wrap'>
                <div className='card-image'>
                    <img src={galactic} alt="galactic" />
                    <Title/>
                    <Likes/>
                </div>
                <Comments/>
            </div>
        </div>
    )
}