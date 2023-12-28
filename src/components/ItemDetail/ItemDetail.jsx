import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import RateVisor from "../RateVisor/RateVisor";
import ProductPriceViewer from "../ProductPriceViewer/ProductPriceViewer";
import StockVisor from "../StockVisor/StockVisor";
import ItemCountSelector from "../ItemCountSelector/ItemCountSelector";
import { useContext } from "react";
import { ItemDetailContext } from "../../context/ItemDetailContext";
import { getStockProduct } from "../../DATA/data_manager";
import { useStock } from "../../hooks/useStock";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
 

   const [selectedSize, setSelectedSize] = useState(null)
    const [availableStock, setAvailableStock] = useState(0)
    const [categoryList, setCategoryList] = useState([])

   const {addCartItem} = useContext(CartContext)
/*()=>selectedQuantity>=1 && contextoCarrito.addItem(selectedProduct,selectedQuantity,selectedSize)*/


  const { isByCategories, getProductCategoriesList, getProductStock } = useStock(product);

  const funcionBoton = (cantidadElegida) =>{
    console.log('Meter al carro ' + cantidadElegida + ' unidades. ' + ' talla ' + selectedSize)
    console.log('cantidad Elegida: ',cantidadElegida)
    addCartItem(product,cantidadElegida,selectedSize)
    
  }

  useEffect(()=>{
    
    //console.log(product)
    //console.log('Productlista', getProductCategoriesList())
    setCategoryList(getProductCategoriesList())
  },[])

  useEffect(()=>{
      console.log('cambio size a: ', selectedSize)
      setAvailableStock(getProductStock(selectedSize))
      console.log('stock: ', availableStock)
  },[selectedSize])

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.imageSrc}
                alt={product.description}
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.productName}
            </h2>
            <div className="flex">
              <span className="mr-4 font-bold text-gray-700 dark:text-gray-300">
                Puntuacion:{" "}
              </span>
              <RateVisor rateNumber={product.rate} />
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Descripcion
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product.description}
              </p>
            </div>

            <div className="m-8 p-8 flex flex-col mb-4 bg-yellow-200">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Precio:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.productPrice}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Precio con descuento:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.productPrice}
                </span>
              </div>
            </div>

            

           
            <StockVisor productCategoriesList={categoryList} categorySelecter={setSelectedSize}/>
            <ItemCountSelector availableStock={availableStock} addToCartFunction={funcionBoton}/>
       
            <div className="flex flex-col mx-2 mb-4">
              <NavLink
                to={"/cart"}
                className="my-4 w-full flex flex-row justify-center  bg-sky-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                Ir al carrito
              </NavLink>

              <NavLink className="w-full flex flex-row justify-center bg-blue-600 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                Comprar Ahora
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
