import React, { useEffect } from "react";
import "bulma/css/bulma.min.css";
import "./itemListContainer.styles.css";
import ItemList from "../ItemList/ItemList";
import {
  getProductList,
  getProductsByCategory,
  getProductsByBrand
  } from "../../DATA/data_manager";
import { useState } from "react";
import { useParams } from "react-router-dom";


export default function ItemListContainer() {
  
  const [products, setProducts] = useState([]);
  const {categoryID} = useParams()
  const {brandID} = useParams()
  
  useEffect(() => {

       
    if (categoryID){
      const asyncFunc = categoryID !== 'todos' ? getProductsByCategory : getProductList
    

      asyncFunc(categoryID)
        .then(response => {
                            setProducts(response) 
                            //console.log('response: ', response)
                            //console.log('products: ', products)
                          
                          })
        .catch(err=>console.log(err))
      }
      else if (brandID){
        console.log('get', getProductsByBrand(brandID))
        setProducts(getProductsByBrand(brandID))
      }
   
      //console.log(data)

  }, [categoryID,brandID]);

  return (
    <div className="flex flex-row">
    <ItemList products ={products}/>
    


      
      
    </div>
  );
}

//<ItemList products ={products}/>
//<UsersFeedBackViewer />