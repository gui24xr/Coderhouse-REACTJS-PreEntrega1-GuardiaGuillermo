import React from 'react'


export default function ProductPriceViewer({productPrice,bannerStyle}) {
  return (
    <div className={bannerStyle ? "flex flex-col bg-red-600" : "flex flex-col items-end text-md font-medium  text-fuchsia-500"}>
    <small className='line-through'>{productPrice}</small>
    <span className="text-xl text-black font-semibold">{productPrice}</span>
  </div>
  )
}
