import React from 'react'
import './ProductPriceViewer.styles.css'

export default function ProductPriceViewer({productPrice,bannerStyle}) {
  return (
    <div className={bannerStyle ? "bannerStyle" : "product-price-container"}>
    <small>{productPrice}</small>
    <span className="product-price-value">{productPrice}</span>
  </div>
  )
}
