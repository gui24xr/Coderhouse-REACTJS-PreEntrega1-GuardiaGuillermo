import React from 'react'
import './StockVisor.styles.css'
import { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

//De acuerdo al tipo de producto el visor que renderiza.

export default function StockVisor({product}) {

     const [count, setCount] = useState(1)

      return (
        <div className="container-stock">
            <div className='container-count'>
                 <TiArrowSortedDown onClick={()=>{count >= 2 && setCount(count-1) }} />
                 <input className='count-number' value={count} placeholder='sgfsdg'/>
                 <TiArrowSortedUp onClick={()=>{ count < product.stockByCount && setCount(count + 1)}}/>
            </div>
          <div>
            <span className="tag-stock">{product.StockByCount<1 ? 'Sin Stock' : 'Stock Disponible'} </span>
            <span className="text-disponibles">{product.stockByCount === 1 ? '1 unidad.' : product.stockByCount + ' unidades.'}</span>
          </div>
        </div>)
  }


/* <div className="container-stock">
          <span className="tag-stock">{product.StockByCount<1 ? 'Sin Stock' : 'Stock Disponible'}
          </span>
          <span>Cantidad (elegir) </span>
          <span className="text-disponibles">{product.stockByCount === 1 ? '1 disponible.' : product.stockByCount + ' disponibles.'}</span>
        </div>)*/