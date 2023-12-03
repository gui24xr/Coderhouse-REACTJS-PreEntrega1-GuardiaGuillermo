import React from 'react';
import './ItemDetailContainer.styles.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../../DATA/data_manager';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const {productID} = useParams()

    useEffect(()=>{

        getProductByID(productID)
            .then(response => setProduct(response))
            .catch(err=> console.log(err))

    },[productID])
    
    return (
        <div className='itemdetailcontainer-container'>
              <ItemDetail product={product}/>
        </div>
    );
}

export default ItemDetailContainer;