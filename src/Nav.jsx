import React from 'react'
import logo from './images/logo.svg'

export const Nav = () => {
  return (
    <nav>
        <img src={logo} alt="logo image" />
        <div>
            <a href="">Features</a>
            <a href="">Team</a>
            <a href="">Sign in</a>
        </div>
    </nav>
  )
}
