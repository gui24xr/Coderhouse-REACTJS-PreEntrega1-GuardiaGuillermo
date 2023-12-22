import React from 'react';
import { useEffect, useState } from 'react';
import { getDocs, collection, addDoc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase'; //Referencia a la base de datos
import DATA_PRODUCTS from '../../DATA/product_data';


const Visualizador = () => {

    /*la funcion collection toma como parametro una referencia a una base de datos, y un nombre de coleccion 
    /y devuelve Referencia a una coleccion de datos*/
    const [itemList, setItemList] = useState([])
    const itemsCollectionRef = collection(db, "prods")
    const ref2 = db.collection('items')


    useEffect(() => {
        const getItemList = async () => {
            //getDocs me trae en forma de promesa los datos de la coleccion que le paso por parametro(Le paso la referencia)
            const data = await getDocs(itemsCollectionRef)
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc
            }))

            console.log(filteredData)
            setItemList(filteredData)

        }

        getItemList()
    }, [])


    const addItemToDB = async () => {
        //Voy agregar a mano en este caso.

        await addDoc(itemsCollectionRef, { 'obj13': 'obj24' },{id:'id2'})
    }

    const addItemsToDB = async () => {

       await setDoc(itemsCollectionRef,)

    }

    return (
        <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>

            <span className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>ddh</span>
            <span className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>{itemList.length}</span>
            <button
                onClick={() => addItemToDB()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Agregar
            </button>

            <button
            onClick={() => addItemsToDB()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Agregar
        </button>
            {itemList.map(item => {

                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>

                    <span className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white' >{item.nombre}</span>
                    <span className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>{item.apellido}</span>
                </div>



            })

            }
        </div>
    )
}

export default Visualizador;