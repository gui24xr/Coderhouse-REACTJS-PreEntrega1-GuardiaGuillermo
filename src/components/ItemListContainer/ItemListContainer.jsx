import React, { useEffect } from 'react'
import 'bulma/css/bulma.min.css'
import './itemListContainer.styles.css'
import { getProductList, getProductByCategories, getProductsByCategory, getCategoriesFromProductList } from '../../DATA/data_manager'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'


export default function ItemListContainer() {

  const {categories} = useParams()
  //console.log('Parametro Ingresado: ', categories)

  //Puedo recibir categorias sea por componente(Ejemplo cuando aplique filtros o por parametro. Segun el caso una de las 2 variables sera undefined)
  const [products, setProducts] = useState(categories === undefined ? getProductList() : getProductsByCategory(categories))
  //console.log(getProductByCategories(['cascos','guantes']))
  
  useEffect(()=>{

    categories === undefined 
    ? setProducts(getProductList())
    : setProducts(getProductsByCategory(categories))
    //console.log(categories)
  },[])
  

  

  return (
    
    
      <div className='grid-container'>
        
      
      {products.map((item) => (
        <ProductCard  productID={item.productID} /> 
      ))}
      
        </div>
    
  )
}
/*
{products.map((item) => (
        <ProductCard  productID={item.productID} /> 
      ))}
*/