import React, { useEffect } from "react";
import "bulma/css/bulma.min.css";
import "./itemListContainer.styles.css";
import ItemList from "../ItemList/ItemList";
import {
  getProductList,
  getProductsByCategory
  } from "../../DATA/data_manager";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import useUnplash  from "../../hooks/useUnplash";
import UsersFeedBackViewer from "../UsersFeedBackViewer/UsersFeedBackViewer";
import CarrouselContainer from "../CarrouselContainer/CarrouselContainer";

export default function ItemListContainer() {
  
  const [products, setProducts] = useState([]);
  const {categoryID} = useParams()
  //const {data} = useUnplash('helmet')
  
  useEffect(() => {

   
    
    const asyncFunc = categoryID !== 'todos' ? getProductsByCategory : getProductList
   

    asyncFunc(categoryID)
      .then(response => {
                          setProducts(response) 
                          //console.log('response: ', response)
                          //console.log('products: ', products)
                        
                        })
      .catch(err=>console.log(err))

   
      //console.log(data)

  }, [categoryID]);

  return (
    <div className="flex flex-row">
    <ItemList products ={products}/>
    


      
      
    </div>
  );
}

//<ItemList products ={products}/>
//<UsersFeedBackViewer />