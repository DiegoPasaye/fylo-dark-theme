import React from 'react'
import pc from './images/icon-access-anywhere.svg'
import secure from './images/icon-security.svg'
import time from './images/icon-collaboration.svg'
import folder from './images/icon-any-file.svg'

export const Caracteristicas = () => {
  return (
    <div className='caracteristicas'>
        <div>
            <img src={pc} alt="PC image" />
            <h3>Acces your files, anywhere</h3>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
        </div>

        <div>
            <img src={secure} alt="secure image" />
            <h3>Security you can trust</h3>
            <p>T2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
        </div>

        <div>
            <img src={time} alt="time image" />
            <h3>Real-time collaboration</h3>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>

        <div>
            <img src={folder} alt="folder image" />
            <h3>Store any type of file</h3>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
        </div>
    </div>
  )
}
