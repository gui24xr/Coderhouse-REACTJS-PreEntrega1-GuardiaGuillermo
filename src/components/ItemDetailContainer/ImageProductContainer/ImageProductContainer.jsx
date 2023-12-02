import React from 'react'
import './ImageProductContainer.styles.css'


export default function ImageProductContainer({product}) {
  return (
    <div className = "container-component">
      <div className = "container-product-img">
        <img src={product.imageSrc} alt="" />
        
      </div>
      <div className = "container-brand-img">
        
        <img src={product.brandImg} alt="" />
      </div>
    </div>
  )
}
