import React from 'react';
import './ItemList.styles.css'
import ProductCard from '../ProductCard/ProductCard';

const ItemList = ({products}) => {

      return (
       
        <div className='w-6/6  my-10 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-10 gap-2'>
           {products.map(product => <ProductCard key={product.productID} product={product}/>)}
        </div>
        
    );
}

export default ItemList;


/*
 <div className='w-4/6 mt-4 shadow-xl' >
        <div className='h-60 px-6 py-6 bg-violet-600 text-4xl text-white '>
          CATEGORIA
        </div>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4'>
           {products.map(product => <ProductCard key={product.productID} product={product}/>)}
        </div>
        </div>
        */