import React from 'react'
import './HeaderContainer.styles.css'
import TitleSite from '../TitleSite/TitleSite'
import NavBar from '../NavBar/NavBar'

export default function HeaderContainer() {
  return (
    <div className='container-header'>
      <TitleSite/>
        <NavBar/>
    </div>
  )
}
