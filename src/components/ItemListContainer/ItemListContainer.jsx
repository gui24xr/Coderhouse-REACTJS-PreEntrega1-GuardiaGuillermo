import React, { useEffect } from "react";


import ItemList from "../ItemList/ItemList";
import {
  getProductList,
  getProductsByCategory,
  getProductsByBrand,
} from "../../DATA/data_manager";
import { useState } from "react";
import { useParams } from "react-router-dom";
import  useDataProducts  from '../../hooks/useDataProducts'
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  const { brandID } = useParams();

  const {loading,getProductListFromFB, getProductsByCategoryFromFB, getProductsByBrandFromFB} = useDataProducts()

  useEffect(() => {
    //console.log(categoryID,brandID)
    //setProducts(getProductsByBrandFromFB(brandID))
     if (!loading){
      //alert('carga terminada')
   if (categoryID) {categoryID !== "todos" ? setProducts(getProductsByCategoryFromFB(categoryID)) : setProducts(getProductListFromFB())}
    else setProducts(getProductsByBrandFromFB(brandID))
     }
     else{
      console.log('cargando')
     }
  }, [categoryID, brandID,loading]);

  return (
    <div className="m-5 h-[1261px] w-full overflow-y-auto h-100">
      {loading ? <SpinnerLoading/> : <ItemList products={products}/>}
    
    </div>
  );
}


/*

useEffect(() => {
  console.log('dgdgdg: ',categoryID)
  //if (categoryID) {
    const getDataFunction = categoryID !== "todos" ? getProductsByCategoryFromFB : categoryID !== "todos"
    setProducts(getDataFunction(categoryID))

    categoryID && setProducts(getProductsByCategoryFromFB(categoryID))
    //brandID && setProducts
    
    
    const asyncFunc = categoryID !== "todos" ? getProductsByCategory : getProductList
    asyncFunc(categoryID)
      .then((response) => {
        setProducts(response);
        //console.log('response: ', response)
        //console.log('products: ', products)
      })
      .catch((err) => console.log(err));
  } else if (brandID) {
    //console.log("get", getProductsByBrand(brandID));
    setProducts(getProductsByBrand(brandID));
  }
  
  //console.log(data)
}}, [categoryID, brandID]);

*/