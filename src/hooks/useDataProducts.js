import React from 'react'
import { useState,useEffect } from 'react'
import {  getDocs, collection, addDoc, doc, setDoc, writeBatch  } from 'firebase/firestore'
import { db } from '../config/firebase'
import DATA_BRANDS from '../DATA/brand_data'
export default function useDataProducts() {

   
    
    const [dataProducts, setDataProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [dataBrands, setDataBrands] = useState([])
    const [loadingBrands,setLoadingBrands] = useState(true)
    


    useEffect(()=>{
      getDocs(collection(db, "prods"))
        .then(response => {
                const filteredData = response.docs.map((doc) => ({...doc.data(),id: doc}))
                setDataProducts(filteredData)
                //Ya cargue los productos ahora cargo las marcas.
                getDocs(collection(db, "brand_data"))
                  .then(response => {
                    const filteredDataBrands = response.docs.map((doc) => ({...doc.data(),id: doc}))
                    setDataBrands(filteredDataBrands)
                    setLoading(false)
                    
                  })



                
                
                
           })
          .catch(error => console.log('Error de Firebase: ',error))

    },[])

    /*   useEffect(()=>{
      getDocs(collection(db, "prods"))
        .then(response => {
                const filteredData = response.docs.map((doc) => ({...doc.data(),id: doc}))
                setDataProducts(filteredData)
                setLoading(false)
                
           })
          .catch(error => console.log(error))

    },[])
*/




    const verResultado= () =>{
        console.log('Resultado: ', dataProducts)
        return dataProducts
    }

    const getProductListFromFB= () =>{
      //console.log('Resultado: ', dataProducts)
      return dataProducts
  }

  const getProductsByCategoryFromFB= (category) =>{
    //console.log('Productos de la categoria ' + category + ' ',productsOfCategory)
    return dataProducts.filter(item => item.category === category)//productsOfCategory
}


const getProductsByBrandFromFB = (brand) => {
  //console.log('Ejecutando brands', brand,pepe)
  return dataProducts.filter(item => item.brand === brand)
}

const getProductByIDFromFB = (productID) =>{
//Cruza los datos y devuelve el producto de productID con los datos agregados como x ejemplo de marca.
//Recordar que filter devuelve un array y cuando devuelva uno solo hay que transformar el objeto
//En este caso devolvera solo 1 xq el ID es unico
 const product = dataProducts.filter(item=> item.productID == productID)[0]
 const brandInfo = dataBrands.filter(item => item.brand === product.brand)[0]
 product.brandImg = brandInfo.brandImg
 return product

}
   

  return {dataProducts, 
          loading ,
          verResultado,
          getProductListFromFB,
          getProductsByCategoryFromFB,
          getProductsByBrandFromFB,
          getProductByIDFromFB,
        }
  
}
