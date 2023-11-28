import React from 'react'
import './SearchInput.styles.css'
import { FaSistrix } from "react-icons/fa";

export default function SearchInput() {
  return (
           
    <div className="container-search-form">
    
      <input className="input" type="search" placeholder="Buscar"/>
      <span className="container-icon-search"> <FaSistrix size={34} color='white' /> </span>

</div>
  )
}
