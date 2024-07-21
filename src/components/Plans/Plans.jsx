import React from 'react'
import {plansData} from '../../data/plansData'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'

export const Plans = () => {
  return (
    <div className='plans-container'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className='programs-header' style={{gap:'2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>
        {/*plans card*/}
        <div className="plans">
            {plansData.map((plan,index)=>(
                <div className="plan" key={index}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature" key={i}>
                                <img src={whiteTick} alt="" />
                                <span > {feature}</span>
                            </div>



                        ))}
                    </div>
                    <div>
                        <span>see more benefits</span>
                    </div>
                    <button className="btn">
                        Join now
                    </button>
                </div>

            ))}
        </div>
    </div>
    
  )
}
