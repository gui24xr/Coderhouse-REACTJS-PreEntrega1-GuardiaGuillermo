import React from 'react';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';


const Visualizador = () => {

    const itemsCollectionRef = collection(db,'items')
    const [resultado, setResultado]= useState('resultado')

    useEffect(()=>{
        const getItemList = async () =>{
            const data = await getDocs(itemsCollectionRef)
            console.log(data)
        }

        getItemList()
    },[])

    return (
  
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            2365
         </div>
    )
}

export default Visualizador;