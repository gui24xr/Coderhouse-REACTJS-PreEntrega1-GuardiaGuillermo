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

export default function ItemListContainer({ greeting }) {
  
  const [products, setProducts] = useState([]);
  const {categoryID} = useParams()
  
  useEffect(() => {
    
    const asyncFunc = categoryID  ? getProductsByCategory : getProductList
    console.log('C: ', categoryID)
    console.log('C: ', asyncFunc)
    


    asyncFunc(categoryID)
      .then(response => {
                          setProducts(response) 
                          console.log('response: ', response)
                          console.log('products: ', products)
                        
                        })
      .catch(err=>console.log(err))

   /* getProductList()
      .then(response => setProducts(response))
      .catch(err => console.log(err))*/
  }, [categoryID]);

  return (
    <div className="itemlistcontainer-container">
      <h1>{greeting}</h1>
      <ItemList products ={products}/>
    </div>
  );
}
