import React from 'react'

import { FaUserAlt } from "react-icons/fa";


export default function LoginWidget() {
  return (
    <div  to={'/cart'}  className="h-9 relative inline-flex items-center px-5 py-0.5 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <svg className='w-5 h-5 me-2' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
    <span class="sr-only">Notifications</span>
    Iniciar Sesion
    
 
    </div>
  )
}
