import React from 'react';
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        {/*Header*/}
        <div className="programs-header">
            <span  className='stroke-text'>Explore ouur</span>
            <span>prograams</span>
            <span className='stroke-text'>shape your</span>
        </div>

        <div className="programs-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join now</span>
                        <img src={RightArrow} alt="" />

                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Programs