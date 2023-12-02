import React from 'react'
import './InfoProductContainer.styles.css'
import RateVisor from '../../RateVisor/RateVisor'
import ProductPriceViewer from '../../ProductPriceViewer/ProductPriceViewer'
import StockVisor from '../../StockVisor/StockVisor'

export default function InfoProductContainer({product}) {
  return (
    <div className = "container-component">
        
        <p  className="product-title">{product.productName}</p>
        <RateVisor rateNumber={product.rate} />

       <StockVisor product={product}/>
    </div>
  )
}
