import React, { useEffect, useState } from "react";

//Este componente va a recibir una lista de componentes que va a renderizar


const SliderContainer = ({itemList,time}) => {

    const [actualFrame,setActualFrame] = useState(0)

    useEffect(()=>{

        setInterval(()=>{
            setActualFrame(actualFrame + 1)
            if (actualFrame === itemList.length-1) setActualFrame(0)
        },time)
    },)

    return (
        <div >
           {itemList[actualFrame]}
        </div>
    );
}

export default SliderContainer;