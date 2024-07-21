import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Logo from '../../assets/logo.png'
import LinkedIn from '../../assets/linkedin.png'

export const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />

            </div>
            <div className="logo-f">
              <img src={Logo} alt="" />
            </div>
        </div>
        <div className="blur blur-f-1 plans-blur-2"></div>
        <div className="blur blur-f-3 plans-blur-2"></div>
        <div className="blur blur-f-2 plans-blur-1"></div>
        
    </div>
  )
}
