import React from 'react'
import productive from './images/illustration-stay-productive.png'
import arrow from './images/icon-arrow.svg'

export const Productive = () => {
  return (
    <div className='productive'>
        <img src={productive} alt="Productive illustration" />
        <div className='productive-text'>
            <h2>Stay productive, wherever you are</h2>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <div className='how-work'><span>See how Fylo works</span><img src={arrow} alt="arrow icon" /></div>
        </div>
    </div>
  )
}
