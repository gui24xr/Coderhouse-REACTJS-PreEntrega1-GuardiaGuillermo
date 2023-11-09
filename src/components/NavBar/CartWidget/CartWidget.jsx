import React from 'react'
import {  FaCartArrowDown } from "react-icons/fa";
import 'bulma/css/bulma.min.css'

export default function CartWidget() {

//Provisorio xq se que esto mas tarde vendra de la BD
const cantItems = 10
  return (
    <div className="container">
    
    <FaCartArrowDown size={24}/>
      <p > {cantItems}  </p>
         
  </div>
  )
}
