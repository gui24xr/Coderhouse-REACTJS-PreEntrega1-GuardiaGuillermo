import React from 'react'
import './CategoriesContainer.styles.css'
import { getCategoriesFromProductList } from '../../DATA/data_manager'
import { NavLink } from 'react-router-dom'


export default function CategoriesContainer() {

    const categoriesList = getCategoriesFromProductList()
  
    return (
    <nav className='container-categories'>
    <NavLink to={'/categories/gorras'}>pppppp</NavLink>
    {categoriesList.map((item) => (
        <button className="button is-black" >
          {item.toUpperCase()}
        </button>
        
      ))}
    </nav>
  )
}
