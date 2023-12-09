import React, { useEffect, useState } from "react";
import RateVisor from "../RateVisor/RateVisor";
import { PiHeartStraightLight } from "react-icons/pi";
import { BiCartAdd } from "react-icons/bi";
import { getProductByID } from "../../DATA/data_manager";
import { NavLink } from "react-router-dom";
import ProductPriceViewer from "../ProductPriceViewer/ProductPriceViewer";
//import 'bulma/css/bulma.min.css'


function ProductCard({ product }) {

//Puedo recibir parametros ya sea por componente o por url
   


  

  return (
    <div className="p-4 text-center w-full shadow-lg mx-auto bg-white rounded-lg">
      <div className="flex items-center">
        <img className='w-80 h-30 object-contain 'src={product.imageSrc} alt="" />
      </div>

      <div className="p-4 h-24 overflow-hidden text-sm font-semibold text-gray-900 hover:text-amber-300">
        <NavLink to={'../itemdetail/'+product.productID}>
                
                {product.productName}
        </NavLink>
      </div>
      <div className="my-2">
        <RateVisor rateNumber={product.rate} />
      </div>
      <div >
        <ProductPriceViewer productPrice={product.productPrice}/>
      </div>
      <div className=" my-4 p 1 w-full flex flex-row justify-between">
        <PiHeartStraightLight
            size={36}
            color={"#4169e1"}
            className="hover:text-amber-300"
          />
          <BiCartAdd
            size={38}
            color={"#4169e1"}
          
          />
        </div>
    
    </div>
  );
}

export default ProductCard;
