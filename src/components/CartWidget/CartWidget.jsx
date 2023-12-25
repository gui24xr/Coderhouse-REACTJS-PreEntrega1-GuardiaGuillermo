import React from 'react'
import './CartWidget.styles.css'
import { CgShoppingCart } from "react-icons/cg";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {

  const {cartLength} = useContext(CartContext)

//Provisorio xq se que esto mas tarde vendra de la BD

  return (
    <div className="container-cartwidget">
    
    <CgShoppingCart className='icono' size={24} color='white'/>
    <span className='cantItems'>{cartLength}</span>
         
  </div>
  )
}
