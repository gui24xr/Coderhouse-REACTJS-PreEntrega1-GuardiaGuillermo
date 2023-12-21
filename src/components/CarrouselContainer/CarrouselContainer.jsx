import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function CarrouselContainer({ titleComponent,itemList,containerClassName,gridClassName }) {

  const CANTIDADMOSTRADA = 4
  
  const [initialFrame, setInitialFrame] = useState(0)
  const [endFrame,setEndFrame] = useState(CANTIDADMOSTRADA)
  const [ItemsMostrados,setItemsMostrados]=useState(itemList.slice(initialFrame,endFrame))

  useEffect(()=>{
    setItemsMostrados(itemList.slice(initialFrame,endFrame))
  },)

  const moveForward = () => {
    if(endFrame < (itemList.length-1)){
      setInitialFrame(prevState => prevState+ 1)
      setEndFrame((prevState => prevState+ 1))
      setItemsMostrados(itemList.slice(initialFrame,endFrame))
    }
  }

  const moveBack = () => {

    if (initialFrame  > 0){
      setInitialFrame(prevState => prevState - 1)
      setEndFrame((prevState => prevState -  1))
      setItemsMostrados(itemList.slice(initialFrame,endFrame))
  }
  }


  return (

    <div className={containerClassName}>

      
        {titleComponent}
      

      <div className="w-6/6 h-40 flex flex-row">
        <div classname="w-1/6 flex flex-col justify-center self-center">
          <FaRegArrowAltCircleLeft size={40} onClick={()=>moveBack()} />
        </div>
        <div className ={ gridClassName }>
          {ItemsMostrados.map(item => item) }
        </div>
        <div classname="w-1/6">
          <FaRegArrowAltCircleRight size={40} onClick={()=>moveForward()}/>
        </div>
      </div>
    </div>
  );
}
