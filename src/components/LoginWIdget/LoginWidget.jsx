import React from 'react'

import { FaUserAlt } from "react-icons/fa";


export default function LoginWidget() {
  return (
    <div className='flex items-center h-full gap-4'>
        <FaUserAlt size={18} color={'white'}/>
        <span className='text-white text-md'>USERNAME</span>
    </div>
  )
}
