import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import RateVisor from "../RateVisor/RateVisor";
import ProductPriceViewer from "../ProductPriceViewer/ProductPriceViewer";
import StockVisor from "../StockVisor/StockVisor";
import ItemCountSelector from "../ItemCountSelector/ItemCountSelector"
import { useContext } from "react";
import { ItemDetailContext } from "../../context/ItemDetailContext"
import { CartContext } from "../../context/CartContext";
import { getStockProduct } from "../../DATA/data_manager";
import { useStock } from "../../hooks/useStock";



const ItemDetail = ({ product }) => {

  //Este contexto va a tener todos los states que se manejaran entre los diferentes componentes que tiene nuestro itemDetail
  const contextoItemDetail = useContext(ItemDetailContext)
  contextoItemDetail.setSelectedProductID(product.productID)

  const productWithStockByCategories = contextoItemDetail.selectedProductID!==undefined && getStockProduct(contextoItemDetail.selectedProductID).isStockByCategories
  
  //contextoItemDetail.setAvailableStock(contextoItemDetail.selectedProductID!==undefined ? getStockProduct(contextoItemDetail.selectedProductID).stockCount : 0)


  console.log('SelectedProductID', contextoItemDetail.selectedProductID)
  console.log('Por talla: ', productWithStockByCategories)

  const {getStockCount} = useStock(product.productID)
  getStockCount()
    //Esta funcion se va a encargar de armar el objeto que le voy a enviar al carrito
  
    
    //Este es el objeto que se le enviara al carrito
  
  
  


const comprarProducto = () =>{
    //Esta funcion manda a comprar el producto sin pasar x el carrito
  
    console.log('Ir a comprar: ')
}

  

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={product.imageSrc} alt={product.description}/>
                    
                </div>
        
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.productName}</h2>
                <div className='flex'>
                  <span className="mr-4 font-bold text-gray-700 dark:text-gray-300">Puntuacion: </span>
                  <RateVisor rateNumber={product.rate}/>
                </div>

                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Descripcion</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {product.description}
                    </p>
                </div>
                
                <div className="m-8 p-8 flex flex-col mb-4 bg-yellow-200">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Precio:</span>
                        <span className="text-gray-600 dark:text-gray-300">{product.productPrice}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">Precio con descuento:</span>
                      <span className="text-gray-600 dark:text-gray-300">{product.productPrice}</span>
                    </div>
                </div>
             
                
                
             <StockVisor/>
               
                <ItemCountSelector/>
                
                <div className="flex flex-col mx-2 mb-4">
               
                      <NavLink 
                      to={'/cart'}
                      className="my-4 w-full bg-sky-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                      >Ir al carrito
                  
                      </NavLink>


             
                 
                      <NavLink className="w-full bg-blue-600 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                     
                      >Comprar Ahora</NavLink>
                  
            </div>
            </div>
        </div>
    </div>
</div>

  );
};

export default ItemDetail;




/*

import React from "react";
import "./ItemDetail.styles.css";
import RateVisor from "../RateVisor/RateVisor";
import ProductPriceViewer from "../ProductPriceViewer/ProductPriceViewer";


const ItemDetail = ({ product }) => {
  return (
    <>
      <style>
        @import
        url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
      </style>

        <div classNameName="my-10 w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div classNameName="md:flex items-center -mx-10">
            <div classNameName="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div classNameName="flex flex-col flex-sta" >
             
                <img
                  src={product.imageSrc}
                  classNameName="w-4/6 "
                  alt=""
                />

                <div classNameName='my-8'>
                  <RateVisor rateNumber={product.rate}/>
                </div>
                

                <div classNameName="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div classNameName="w-full md:w-1/2 px-10">
              <div classNameName="mb-10">
                <h1 classNameName="font-bold uppercase text-2xl mb-5">
                  {product.productName}
                </h1>
                
                
              </div>
              <div>
                <ProductPriceViewer productPrice={product.productPrice} bannerStyle={false}/>
              
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ItemDetail;

*/