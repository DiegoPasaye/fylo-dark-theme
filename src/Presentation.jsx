import React from 'react'
import hero from './images/illustration-intro.png'

export const Presentation = () => {
  return (
    <div className='presentation'>
        <img src={hero} alt="Hero image" />
        <h2>All your files in one secure location, accesible anywhere</h2>
        <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <button>Get Started</button>
    </div>
  )
}
