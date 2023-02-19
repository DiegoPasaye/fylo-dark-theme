import React from 'react'
import logo from './images/logo.svg'
import location from './images/icon-location.svg'
import tel from './images/icon-phone.svg'
import mail from './images/icon-email.svg'
import fb from './images/icon-facebook.svg'
import tw from './images/icon-twitter.svg'
import ig from './images/icon-instagram.svg'

export const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="logo image" />
        <div className='footer-sections'>
            <div className='footer-location'>
                <img src={location} alt="location logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

            <div className='footer-contact'>
                <div>
                    <img src={tel} alt="tel icon" />
                    <p>+1-543-123-4567</p>
                </div>

                <div>
                    <img src={mail} alt="mail icon" />
                    <p>example@fylo.com</p>
                </div>
            </div>

            <div className='footer-links'>
                <a href="">About Us</a>
                <a href="">Jobs</a>
                <a href="">Press</a>
                <a href="">Blog</a>
            </div>

            <div className='footer-links'>
                <a href="">Contact Us</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
            </div>

            <div className='icons'>
                <img src={fb} alt="fb icon" />
                <img src={tw} alt="tw icon" />
                <img src={ig} alt="ig icon" />
            </div>
        </div>
    </footer>
  )
}
