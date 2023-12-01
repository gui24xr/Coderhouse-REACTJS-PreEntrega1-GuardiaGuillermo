import React from 'react'
import './ImageProductContainer.styles.css'


export default function ImageProductContainer({productImage}) {
  return (
    <div className = "container-component">
      <img src={productImage} alt="" />
    </div>
  )
}
