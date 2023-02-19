import React from 'react'
import satish from './images/profile-1.jpg'
import bruce from './images/profile-2.jpg'
import iva from './images/profile-3.jpg'

export const Comments = () => {
  return (
    <>
        <div className='comments'>
            <div className='comment'>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className='comment-down'>
                    <img src={satish} alt="satish image" />
                    <div>
                        <p>Satish Patel</p>
                        <span>Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>

            <div className='comment'>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className='comment-down'>
                    <img src={bruce} alt="bruce image" />
                    <div>
                        <p>Bruce McKenzie</p>
                        <span>Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>

            <div className='comment'>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className='comment-down'>
                    <img src={iva} alt="iva image" />
                    <div>
                        <p>Iva Boyd</p>
                        <span>Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>
        </div>
    
        <div className='early'>
            <h2>Get early acces today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className='early-input'>
                <input type="email" placeholder='email@example.com' />
                <button>Get Started For Free</button>
            </div>
        </div>
    </>
  )
}
