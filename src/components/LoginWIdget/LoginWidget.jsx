import React from 'react'
import './LoginWidget.styles.css'
import { FaUserAlt } from "react-icons/fa";


export default function LoginWidget() {
  return (
    <div className='container-login'>
      <FaUserAlt className='icono' size={30} color={'white'}/>
      <span className='usernames'>USERNAME</span>
    </div>
  )
}
