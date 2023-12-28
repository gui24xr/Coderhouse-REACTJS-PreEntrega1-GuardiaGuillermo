import React from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../DATA/data_manager";
import { ItemDetailProvider } from "../../context/ItemDetailContext";
import useDataProducts from "../../hooks/useDataProducts";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

const ItemDetailContainer = () => {
  const { getProductByIDFromFB, loading } = useDataProducts();
  const [product, setProduct] = useState({});
  const { productID } = useParams();

  useEffect(() => {
    
            //Esto es para trabajar desde el lado cliente.
          /*  getProductByID(productID)
            .then(response => setProduct(response))
            .catch(err=> console.log(err))*/
                

    !loading && setProduct(getProductByIDFromFB(productID));
  }, [productID, loading]);

  return (
    <ItemDetailProvider>
      <div>
        {loading ? <SpinnerLoading /> : <ItemDetail product={product} />}
      </div>
    </ItemDetailProvider>
  );
};

export default ItemDetailContainer;
