import React from 'react'
import { useState, useContext } from 'react'
import { getStockProduct } from '../../DATA/data_manager'
import { ItemDetailContext } from '../../context/ItemDetailContext'


//De acuerdo al tipo de producto el visor que renderiza.
//En este caso el parametro va a llegar por medio del contexto
export default function StockVisor() {

    //Investigar xq productID a veces llega hasta aca como undefined
    //console.log('sffsfsfs', productID)
    const contexto = useContext(ItemDetailContext)
    //console.log('Viro', contexto.selectedProductID)
    const stockProductInfo = contexto.selectedProductID!==undefined && getStockProduct(contexto.selectedProductID)
    const classButton="my-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
    const classSelectedButton = "my-1 bg-blue-600 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold mr-2 "
 
 
    //const [stockCountInfo, setStockCountInfo] = useState( stockProductInfo.isStockByCategories ? stockProductInfo.categoriesList[0] : stockProductInfo.stockByCount )
    const [selectedCategory, setSelectedCategory] = useState('xx' )
   
    console.log('stock: ',contexto.availableStock, 'categoria:' , contexto.selectedSize, 'cant: ', contexto.selectedQuantity)
     if ( stockProductInfo.isStockByCategories ){

      

      return (
        <div className="mb-4">
        <span className="font-bold text-gray-700 dark:text-gray-300">Seleccionar talle :</span>
        <div className="flex items-center flex-wrap mt-2">
           {stockProductInfo.categoriesList.map( category => 
            <button 
              onClick={(e)=>{contexto.setAvailableStock(stockProductInfo.stockCount[category])
                            contexto.setSelectedSize(category) //El tamaño coincide con la categoria de talle
                            contexto.setSelectedQuantity(1)
                            setSelectedCategory(category)
                              
                             }}
              key={category}
              className={selectedCategory === category ? classSelectedButton : classButton}
              
              >
              {category.toUpperCase()}
              </button>
          )
          }
            
        </div>
        <div className="mt-6 grid justify-items-center">
                  
          
          


        
      </div>
    </div>
    )
      }

    else{
      //Este renderizado es solo para los productos que no tienen categoria en su stock ejemplo
      contexto.setAvailableStock(stockProductInfo.stockCount)
      contexto.setSelectedSize('no')

      return (
        <span className="font-bold text-gray-700 dark:text-gray-300">Seleccionar cantidad :</span>)
    }
  }

  // {Object.keys(product.stockBySize).map(item => <span>{item}</span>)}
  //<span className="font-bold text-gray-700 dark:text-gray-300">Categoria sel{':  ' + selectedCategory}</span>

