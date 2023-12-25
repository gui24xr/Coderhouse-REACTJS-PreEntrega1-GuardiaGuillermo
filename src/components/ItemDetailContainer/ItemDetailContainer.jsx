import React from 'react';

import ItemDetail from '../ItemDetail/ItemDetail'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../../DATA/data_manager';
import { ItemDetailProvider } from '../../context/ItemDetailContext';



const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const {productID} = useParams()

    useEffect(()=>{



        getProductByID(productID)
            .then(response => setProduct(response))
            .catch(err=> console.log(err))

    },[productID])
    
    return (
        <ItemDetailProvider>
            <div>
                <ItemDetail product={product}/>
            </div>
        </ItemDetailProvider>
    );
}

export default ItemDetailContainer;