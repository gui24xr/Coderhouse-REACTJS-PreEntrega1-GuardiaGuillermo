import React from 'react';
import { useState, useEffect } from 'react';
import { getBranchsList } from '../../DATA/data_manager';
import CarrouselContainer from '../CarrouselContainer/CarrouselContainer';
import BranchCard from './BranchCard/BranchCard';


const CarrouselBranchs = () => {

    const branchsComponentsList = []
    const [branchsList, setBranchsList] = useState([])

    useEffect(()=>{

        getBranchsList().forEach(item => {
            branchsComponentsList.push(<BranchCard branchID={item.id} 
                                                   branchName={item.branchName} 
                                                   branchContact={item.contact} 
                                                   branchAddress={item.latitude + '' + item.longitude}/>)
            })

        setBranchsList(branchsComponentsList)

    },[])

    return (
        <CarrouselContainer
        titleComponent={
          <div className="px-5 w-5/5 h-6 flex flex-row bg-blue-200 font-semibold text-md text-white shadow-md">
            NUESTRAS SUCURSALES
          </div>
        }
        itemList={branchsList}
        containerClassName="mx-center w-5/5 my-4  flex flex-col"
        gridClassName="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 "
      />
    );
}

export default CarrouselBranchs;