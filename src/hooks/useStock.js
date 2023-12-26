import { useState,useEffect } from "react";
import { getStockProduct, getProductList } from "../DATA/data_manager";
import DATA_PRODUCTS from "../DATA/product_data";

export const useStock = (productID) => {

    const [selectedProductID, setSelectedProductID] = useState(productID !== undefined ? productID : 0)
    const productIndex = DATA_PRODUCTS.findIndex(item => item.productID === selectedProductID)
    const producto = DATA_PRODUCTS[productIndex]
   // console.log('Catego inicial: ', categoriaInicial)
    const [catalogo, setCatalogo] = useState(DATA_PRODUCTS)
    
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState(null)
    const [availableStock, setAvailableStock] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState(!producto.stockByCategories ? 'none' : [...Object.keys(producto.stockBySize)][0])

    useEffect(()=>{setSelectedCategory(!producto.stockByCategories ? 'none' : [...Object.keys(producto.stockBySize)][0])},[selectedProductID])

   const getStockCount = () => {

        
        
        //Si no es por categorias busca y devuelve stockbycount, si no el de selectedSIze
        if (!producto.stockByCategories) {
            console.log('Stock: ', producto.stockByCount)
            return producto.stockByCount
        }
        else{

            console.log('Es categorizado', [...Object.keys(producto.stockBySize)] )
            console.log('categoria sel: ', selectedCategory)

        }


        console.log('usestock: ',producto,productID, 'Catego: ', 1,'categoria sel: ', selectedCategory)

   }


    return{
                    selectedProductID,
                    setSelectedProductID, 
                    selectedQuantity, 
                    setSelectedQuantity,
                    selectedSize, 
                    setSelectedSize,
                    availableStock, 
                    setAvailableStock,
                    getStockCount,
                    
                }
               
}