import React from 'react'
import 'bulma/css/bulma.min.css'

export default function ItemListContainer({greeting}) {
  return (
    <div className='title is-1 is-spaced'>
      <h1>{greeting}</h1>
    </div>
  )
}
