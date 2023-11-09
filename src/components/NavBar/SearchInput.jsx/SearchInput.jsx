import React from 'react'
import { FaSistrix } from "react-icons/fa";

export default function SearchInput() {
  return (
           
    <div className="control has-icons-left has-icons-right">
    
    <input className="input" type="search" placeholder="Buscar"/>
    <span className="icon is-small is-right">
       
        <FaSistrix size={24} /> 
        
       
    </span>

</div>
  )
}
