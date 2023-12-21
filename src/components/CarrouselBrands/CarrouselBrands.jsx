import React from 'react';
import { useState, useEffect } from 'react';
import CarrouselContainer from '../CarrouselContainer/CarrouselContainer';
import BrandFrame from './BrandFrame/BrandFrame';
import { getBrandsList } from '../../DATA/data_manager';



const CarrouselBrands = () => {

    const brandsComponentsList = []
    const [ brandsList, setBrandsList] = useState([])

    useEffect (()=>{
    
       getBrandsList().forEach(item => {
           
            brandsComponentsList.push(<BrandFrame brandName={item.brand} brandImage={item.brandImg}/>)
           
    
        })

        setBrandsList(brandsComponentsList)
        console.log('hhh', brandsComponentsList)
    },[])

    return (
        <CarrouselContainer
        titleComponent={
          <div className="px-5 w-6/6 h-6 flex flex-row bg-blue-200 font-semibold text-md text-white shadow-md">
            MARCASA
          </div>
        }
        itemList={brandsList}
        containerClassName="mx-center w-5/5 my-4  flex flex-col"
        gridClassName="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 "
      />
    );
}

export default CarrouselBrands;