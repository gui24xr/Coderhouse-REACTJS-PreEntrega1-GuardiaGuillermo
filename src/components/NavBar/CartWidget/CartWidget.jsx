import React from 'react'
import './CartWidget.styles.css'
import { CgShoppingCart } from "react-icons/cg";


export default function CartWidget() {

//Provisorio xq se que esto mas tarde vendra de la BD
const cantItems = 10
  return (
    <div className="container-cartwidget">
    
    <CgShoppingCart className='icono' size={36} color='white'/>
    <span className='cantItems'>{cantItems}</span>
         
  </div>
  )
}
