import React, { useEffect } from "react";
import "bulma/css/bulma.min.css";

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

export default function HomeContainer() {
  
  const [productsOffers, setProductsOffers] = useState([]);
    
  useEffect(() => {
  
    
  
   

    getProductList() // tiene que ser de ofertas para el carrusel
      .then(response => {
                          setProductsOffers(response) 
                          //console.log('response: ', response)
                          //console.log('products: ', products)
                        
                        })
      .catch(err=>console.log(err))

   
      //console.log(data)

  });

  return (
    <div className="flex flex-row">
    <CarrouselContainer productList={productsOffers}/>
    


      
      
    </div>
  );
}