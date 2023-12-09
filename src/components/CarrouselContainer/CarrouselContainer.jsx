import React, { useEffect, useState } from "react";
import OfferCard from "../OfferCard/OfferCard";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function CarrouselContainer({ productList }) {

  const CANTIDADMOSTRADA = 4
  
  const [initialFrame, setInitialFrame] = useState(0)
  const [endFrame,setEndFrame] = useState(CANTIDADMOSTRADA)
  const [productosMostrados,setProductosMostrados]=useState(productList.slice(initialFrame,endFrame))

  useEffect(()=>{
    setProductosMostrados(productList.slice(initialFrame,endFrame))
  })

  const moveForward = () => {
    if(endFrame < (productList.length-1)){
      setInitialFrame(prevState => prevState+ 1)
      setEndFrame((prevState => prevState+ 1))
      setProductosMostrados(productList.slice(initialFrame,endFrame))
    }
  }

  const moveBack = () => {

    if (initialFrame  > 0){
      setInitialFrame(prevState => prevState - 1)
      setEndFrame((prevState => prevState -  1))
      setProductosMostrados(productList.slice(initialFrame,endFrame))
  }
  }


  return (

    <div className="mx-center w-4/5 my-4  flex flex-col">

      <div className="w-6/6 h-6 flex flex-row bg-yellow-200 font-semibold text-md text-white shadow-md">
        OFERTAS
      </div>

      <div className="w-6/6 h-40 flex flex-row">
        <div classname="w-1/6 flex flex-col justify-center self-center">
          <FaRegArrowAltCircleLeft size={40} onClick={()=>moveBack()} />
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 ">
          {productosMostrados.map((product) => (
            <OfferCard key={product.productID} product={product} />
          ))}
        </div>
        <div classname="w-1/6">
          <FaRegArrowAltCircleRight size={40} onClick={()=>moveForward()}/>
        </div>
      </div>
    </div>
  );
}
