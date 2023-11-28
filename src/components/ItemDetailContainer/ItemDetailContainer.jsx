import React from 'react'
import { useState,useEffect } from 'react'
import './ItemDetailContainer.styles.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import ProductCard from '../ProductCard/ProductCard'
import { getProductByID } from '../../DATA/data_manager'

//console.log('LLLLLLLLLL',getProductByID(0))

export default function ItemDetailContainer({productID}) {


    const [product,setProduct] = useState(productID)

  return (
    <div>
        <h1>Holaaa</h1>
        <ProductCard productID={product}/>
    </div>
  )
}

//<ItemDetail {...product}/>

