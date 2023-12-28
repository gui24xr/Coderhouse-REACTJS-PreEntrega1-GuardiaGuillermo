import { useState,useEffect } from "react";
import { getStockProduct, getProductList } from "../DATA/data_manager";


export const useStock = (product) => {

  //Este hook se encarga de procesar informacion del producto recibido y dar informacion del mismo a la app
  //Procesa un producto que ya fue antes extraido de firebase.

  //Retorna true si el producto es por categorias(talla en caso de nuestro catalogo), de lo contrario devuelve false.
    const isByCategories = () => product.stockByCategories

    //Retorna la lista de categorias que tiene el producto, si no es categorizado devuelve array vacio
    const getProductCategoriesList = ()=> product.stockByCategories ? Object.keys(product.stockBySize) : []

    //Devuelve el stock segun categoria. Si category null devuelve el stockByCount(O sea total sea en caso)
    const getProductStock = (category) => {
        
        if(category === null) { 
            return product.stockByCount
        } 
        else{
           
           const arrayClaves =  Object.keys(product.stockBySize)
           const arrayValores = Object.values(product.stockBySize)
           const indexOfCategory = arrayClaves.findIndex(x => x == category)
           return arrayValores[indexOfCategory]
        }
    }

    return{ isByCategories, getProductCategoriesList, getProductStock               
                    
                }
               
}