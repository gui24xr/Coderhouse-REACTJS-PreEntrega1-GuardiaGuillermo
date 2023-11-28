import React, { useEffect } from 'react'
import 'bulma/css/bulma.min.css'
import './itemListContainer.styles.css'
import { getProductList, getProductByCategories, getProductsByCategory, getCategoriesFromProductList } from '../../DATA/data_manager'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'


export default function ItemListContainer() {

  const { categories } = useParams()
  console.log('CCCCA: ', categories)
  //categories = ['guantes','gorras','pantalones']
  //Categories es un array con la lista de categorias que renderiza mi itemListContainer.. 
  //SI categories es undefined renderizo listado entero, si no, uso la lista entera
  const [products, setProducts] = useState(getProductList())
  //console.log(getProductByCategories(['cascos','guantes']))
  /*
  useEffect(()=>{

    categories === undefined 
    ? setProducts(getProductList())
    : setProducts(getProductsByCategory('gorras'))
    console.log(categories)
  },[categories])
  */

  useEffect(()=>{console.log('PPPP: ',products)},[products])

  return (
    
    
      <div className='grid-container'>
        
      <button onClick={()=>{setProducts(getProductsByCategory('bolsos'))}}>ssssssssssssss</button>
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