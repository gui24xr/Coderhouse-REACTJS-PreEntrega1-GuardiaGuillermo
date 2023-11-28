import React from 'react'
import './RateVisor.styles.css'
import { FaStar,FaRegStar } from "react-icons/fa6";


export default function RateVisor({rateNumber}) {
    
    const STARCOLOR = '#4169e1'//'#3cb371'

    const cantMaxStars = 5
    const starsActiveArray = Array.from({length:rateNumber},(item)=> item=<FaStar size={20}color={STARCOLOR} className='star'/>) //el length de este viene por parametro
    const starsInactiveArray = Array.from({length:cantMaxStars-rateNumber},(item)=> item=<FaRegStar color={'grey'} className='star'/>) //el 2 del length de este viene por parametro
    const starsArray = [...starsActiveArray,...starsInactiveArray]

     

  return (

    <div className='rateContainer'>
        <span className='rateNumber'>{rateNumber}</span>
        <div className='starContainer'>
            {starsArray.map(item =><>{item}</>)}
        </div>
        
        </div>
  )
}
