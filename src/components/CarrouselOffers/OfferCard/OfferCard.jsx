import React, { useEffect, useState } from "react";
import RateVisor from "../../RateVisor/RateVisor";
import { PiHeartStraightLight } from "react-icons/pi";
import { BiCartAdd } from "react-icons/bi";
import { getProductByID } from "../../../DATA/data_manager";
import { NavLink } from "react-router-dom";
import ProductPriceViewer from "../../ProductPriceViewer/ProductPriceViewer";
//import 'bulma/css/bulma.min.css'


function OfferCard({ product }) {

//Puedo recibir parametros ya sea por componente o por url
   


  

  return (
    <div className="px-4 py-2  flex flex-row text-center w-full shadow-lg mx-auto bg-white rounded-lg">
        
        <div className="flex flex-col items-center">
            <img className='w-50 h-40 object-contain 'src={product.imageSrc} alt="" />
             
            <div className="my-2">
                <RateVisor rateNumber={product.rate} />
            </div>
        </div>

        <div className="px-2 flex flex-col items-center">
            <div className="p-4 h-24 overflow-hidden text-sm font-semibold text-gray-900 hover:text-amber-300">
                <NavLink to={'../itemdetail/'+product.productID}>               
                    {product.productName}
                </NavLink>
            </div>
            
           
        
            <div className="flex-row justify-center">
                <ProductPriceViewer productPrice={product.productPrice}/>
            </div>
        
            <div className=" my-4 px-1 w-full flex flex-row justify-center">
                <PiHeartStraightLight
                size={20}
                color={"#4169e1"}
                className="hover:text-amber-300"
                />
                <BiCartAdd
                size={22}
                color={"#4169e1"}
                className="hover:text-amber-300"
            
                />
            </div>
        </div>
    </div>
  );
}

export default OfferCard;
