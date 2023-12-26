import React from 'react';
import { useEffect, useState } from 'react';
import { getDocs, collection, addDoc, doc, setDoc, writeBatch } from 'firebase/firestore';
import { db } from '../../config/firebase'; //Referencia a la base de datos
import DATA_PRODUCTS from '../../DATA/product_data';
import useDataProducts from '../../hooks/useDataProducts';


const Visualizador = () => {


    /*la funcion collection toma como parametro una referencia a una base de datos, y un nombre de coleccion 
    /y devuelve Referencia a una coleccion de datos*/
    const [itemList, setItemList] = useState([])
    const itemsCollectionRef = collection(db, "items")

    const {DATA_PRODUCTS, verResultado} = useDataProducts()


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

        //getItemList()
    }, [])


    const addItemToDB = async () => {
        //Voy agregar a mano en este caso.

        await addDoc(itemsCollectionRef, { 'obj13': 'obj24' },{id:'id2'})
    }

    const addItemsToDB = async () => {

    const batch = writeBatch(db)
       // Define los documentos que deseas agregar
    //const docData1 = { campo1: 'valor1', campo2: 'valor2' };
    //const docData2 = { campo1: 'valor3', campo2: 'valor4' };
    DATA_PRODUCTS.forEach(product =>{
        let docRef = doc(db,'prods',(product.productID).toString())
        batch.set(docRef,product)
       //console.log(product)
    })
    
    //const docRef1 = doc(db,'items','id48') // Firestore generará un ID único para este documento
    //batch.set(docRef1, docData1);
    batch.commit()
    
    }

    const addItemsWithSetToDB = async () => {

        //Para agregar algo id propio usamos setDoc

        /*
         setDoc(referenciaal dopcumento, documento nuevo)

         y la referencia en este caso es doc(db,coleccion,id)
         //si no existe lo crea, si existe lo actualiza
        */ 
       //await setDoc(doc(db,'items','id3'),{ 'obj131': 'obj2422222' })

    const batch = writeBatch(db)
       // Define los documentos que deseas agregar
    const docData1 = { campo1: 'valor1', campo2: 'valor2' };
    const docData2 = { campo1: 'valor3', campo2: 'valor4' };

    const docRef1 = doc(db,'prods','id4') // Firestore generará un ID único para este documento
    batch.set(docRef1, docData1);
    batch.commit()
    }

    return (
        <div>
            <button onClick={()=>verResultado()}>Mirar</button>
            <span>Hola</span>
            <span>Hola</span>
            <span>Hola</span>
            {//itemList.map( item => <span>{item.description}</span>)
                
            
            }
        </div>
    )
}

export default Visualizador;