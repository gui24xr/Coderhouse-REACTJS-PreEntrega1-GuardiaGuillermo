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
    const [listaP,setListaP]=useState([])


   /* useEffect(()=>{
      getDocs(collection(db, "prods"))
        .then(response => {
                const filteredDataProducts = response.docs.map((doc) => ({...doc.data(),id: doc}))
                setDataProducts(filteredDataProducts)
                //Ya cargue los productos ahora cargo las marcas.
                getDocs(collection(db, "brand_data"))
                  .then(response => {
                    const filteredDataBrands = response.docs.map((doc) => ({...doc.data(),id: doc}))
                    setDataBrands(filteredDataBrands)

                    //AQUI TENGO QUE FORMAR LOS NUEVOS OBJETO PRODUCTO QUE LE DARE A A LA APP
                    
                    setLoading(false)
                    
                  })
            })
          .catch(error => console.log('Error de Firebase: ',error))

          
    },[])*/



    useEffect(()=>{
      getDocs(collection(db, "brand_data"))
        .then(response => {
                const filteredDataBrands = response.docs.map((doc) => ({...doc.data(),id: doc}))
                setDataBrands(filteredDataBrands)
                //Ya cargue los productos ahora cargo las marcas.
                getDocs(collection(db, "prods"))
                  .then(response => {
                    const filteredDataProducts = response.docs.map((doc) => ({...doc.data(),id: doc}))

                    //Antes de setear DataProducts proceso todo para armar como quiero cada producto
                    const procesados = makeProductList(filteredDataProducts,filteredDataBrands)
                    
                    console.log('PROCESADOS: ', procesados)
                    setDataProducts(procesados)
                    //AQUI TENGO QUE FORMAR LOS NUEVOS OBJETO PRODUCTO QUE LE DARE A A LA APP
                    
                    setLoading(false)
                    
                  })
            })
          .catch(error => console.log('Error de Firebase: ',error))

          
    },[])






    function makeProductList(productosInfo,brandsInfo){

      //
      console.log('make')
      const nuevaList=[]
      productosInfo.forEach(product => {

        const brandInfo = brandsInfo.filter(brand => brand.brand === product.brand)[0]
        
        
        nuevaList.push(
          {
            ...product,
            brandImg:brandInfo.brandImg,
            isByCategories:product.stockByCategories,
            categoriesList: product.stockByCategories ? Object.keys(product.stockBySize) : [],
            getProductStock : (category) => {
        
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
           
          })
      })

      //console.log('NUEVA LISTA: ', nuevaList)
      //setDataProducts(nuevaList)
      return nuevaList
    }


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

 /*const product = dataProducts.filter(item=> item.productID == productID)[0]
 const brandInfo = dataBrands.filter(item => item.brand === product.brand)[0]
 product.brandImg = brandInfo.brandImg
 return product
*/
return dataProducts.filter(item=> item.productID == productID)[0]
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
