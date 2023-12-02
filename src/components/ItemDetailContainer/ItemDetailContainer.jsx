import React from 'react'
import { useState,useEffect } from 'react'
import './ItemDetailContainer.styles.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import ProductCard from '../ProductCard/ProductCard'
import { getProductByID } from '../../DATA/data_manager'
import { useParams } from 'react-router-dom'
import InfoProductContainer from './InfoProductContainer/InfoProductContainer'
import ImageProductContainer from './ImageProductContainer/ImageProductContainer'
import InfoShopContainer from './InfoShopContainer/InfoShopContainer'
import { FaProductHunt } from 'react-icons/fa6'

//console.log('LLLLLLLLLL',getProductByID(0))

export default function ItemDetailContainer() {

const {productID} = useParams()
console.log('Ingreso el productID: ', productID)
    
const [product,setProduct] = useState(getProductByID(productID))

  return (
    <div className='container-itemdetail'>
        <ImageProductContainer product={product}/>
        <InfoProductContainer product={product}/>
        

    </div>
  )
}

//<ItemDetail {...product}/>

