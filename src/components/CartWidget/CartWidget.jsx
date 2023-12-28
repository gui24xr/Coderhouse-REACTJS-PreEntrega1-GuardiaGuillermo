import React from 'react'
import { NavLink } from 'react-router-dom';
import { CgShoppingCart } from "react-icons/cg";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useState, useEffect } from 'react';


export default function CartWidget() {

  const {cart} = useContext(CartContext)
  const [cantidad,setCantidad] = useState(cart.length)

  useEffect(()=>{
    setCantidad(cart.length)
  })

//Provisorio xq se que esto mas tarde vendra de la BD

  return (
    <NavLink  to={'/cart'}  className="h-9 relative inline-flex items-center px-5 py-0.5 text-sm font-bold text-center text-white bg-lime-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg className='w-5 h-5 me-2' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
      <span class="sr-only">Notifications</span>
      Carrito
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cantidad}</div>
   
      </NavLink>
  
  )
}


/*
    <CgShoppingCart classNameNameName='icono' size={24} color='white'/>
    <span classNameNameName='cantItems'>{cartLength}</span>*/