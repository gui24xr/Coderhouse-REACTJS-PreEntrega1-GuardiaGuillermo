import React, { useEffect, useState } from 'react'
import './ProductCard.styles.css'
import RateVisor from '../RateVisor/RateVisor'
import { PiHeartStraightLight } from "react-icons/pi";
import { BiCartAdd } from "react-icons/bi";
import { getProductByID } from '../../DATA/data_manager';
import { NavLink } from 'react-router-dom';
//import 'bulma/css/bulma.min.css'




 function ProductCard({productID}) {

    const [product, setProduct] = useState(getProductByID(productID))

  

  return (
   	<div className="product-card">
	
		<div className="product-tumb">
			<img src={product.imageSrc} alt=""/>
		</div>
		<div className="product-details">
            
			<h4><a href="">{product.productName}</a></h4>
            
            <RateVisor rateNumber={product.rate}/>
			
			
			<div className="product-price-container">
                <small>{product.productPrice}</small>
                <span className="product-price-value">{product.productPrice}</span>
            </div>
            
            
            <div className="product-links-container">
                <PiHeartStraightLight size={28} color={'#4169e1'} className='product-links-icon'/>
                <BiCartAdd size={30} color={'#4169e1'} className='product-links-icon'/>
                

            </div>
		</div>
	</div>
  )}

export default ProductCard
