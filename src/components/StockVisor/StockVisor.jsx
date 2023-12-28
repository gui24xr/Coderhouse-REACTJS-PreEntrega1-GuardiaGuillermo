import React from "react";
import { useState, useContext, useEffect } from "react";
import { getStockProduct } from "../../DATA/data_manager";
import { ItemDetailContext } from "../../context/ItemDetailContext";
import { useStock } from "../../hooks/useStock";
/*Este componente se encarga de mostrar para seleccionar los talles o categorias del producto y marca en el contexto el talle
elegido. En el producto por categorias marca el talle, en los productos que no tienen categoria pone selected size a null y no
renderiza selector */


//Estilos botones segun sean seleccionados o no.
const classButton =
"my-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600";
const classSelectedButton =
"my-1 bg-blue-600 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold mr-2 ";


export default function StockVisor({productCategoriesList,categorySelecter}) {


 
    
  const [selectedCategory, setSelectedCategory] = useState(null)
  

useEffect(()=>{
 if(productCategoriesList.length>=1) setSelectedCategory(productCategoriesList[0])
},[])

  

  return (
    <div className="mb-4">
      <span className="font-bold text-gray-700 dark:text-gray-300">
        Seleccionar talle :
      </span>
      <div className="flex items-center flex-wrap mt-2">
        {
          //Si es un producto por talle seleccionamos size null,
          //Si es por talles renderizamos la lista de categorias de talle y ponemos el talle igual a la categoria al tocar el boton
       
            productCategoriesList.map((category) => (
                <button
                  onClick={() => {
                    
                    setSelectedCategory(category)
                    categorySelecter(category)
                  }}
                  key={category}
                  className={
                    selectedCategory === category
                      ? classSelectedButton
                      : classButton
                  }
                >
                  {category.toUpperCase()}
                </button>
                
              ))
        }
      </div>
      <div className="mt-6 grid justify-items-center"></div>
    </div>
  );
}

// {Object.keys(product.stockBySize).map(item => <span>{item}</span>)}
//<span className="font-bold text-gray-700 dark:text-gray-300">Categoria sel{':  ' + selectedCategory}</span>
