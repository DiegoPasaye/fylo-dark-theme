import React from 'react'
import ReactDOM from 'react-dom/client'
import { Caracteristicas } from './Caracteristicas'
import { Comments } from './Comments'
import { Footer } from './Footer'
import { Nav } from './Nav'
import { Presentation } from './Presentation'
import { Productive } from './Productive'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Nav />
    <Presentation />
    <div className='down'>
      <Caracteristicas />
      <Productive />
      <Comments />
    </div>
    <Footer />
  </>
)
