import React from 'react'
import { useState,useEffect } from 'react'
import {  getDocs, collection, addDoc, doc, setDoc, writeBatch  } from 'firebase/firestore'
import { db } from '../config/firebase'

export default function useDataProducts() {

   
    
    const [dataProducts, setDataProducts] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(()=>{
      getDocs(collection(db, "prods"))
        .then(response => {
                const filteredData = response.docs.map((doc) => ({...doc.data(),id: doc}))
                setDataProducts(filteredData)
                setLoading(false)
                
           })
          .catch(error => console.log(error))

    },[])

    const verResultado= () =>{
        console.log('Resultado: ', dataProducts)
        return dataProducts
    }

    const getProductListFromFB= () =>{
      console.log('Resultado: ', dataProducts)
      return dataProducts
  }

  const getProductsByCategoryFromFB= (category) =>{
    
    const productsOfCategory = []
 
    //Ahora busco los productos de la categoria y los meto a un nuevo array para devolver como promesa
    dataProducts.forEach(item => {
      //Recorro todo el catalogo y si la categoria del producto esta 
       if (item.category === category) productsOfCategory.push(item)
       
    })

    console.log('Productos de la categoria ' + category + ' ',productsOfCategory)
    return productsOfCategory
}


const getProductsByBrandFromFB = (brand) => {

  const pepe = dataProducts.filter(item => item.brand === brand)
  console.log('Ejecutando brands', brand,pepe)
  return dataProducts.filter(item => item.brand === brand)
}
   

  return {dataProducts, loading ,verResultado,getProductListFromFB,getProductsByCategoryFromFB,getProductsByBrandFromFB}
  
}
