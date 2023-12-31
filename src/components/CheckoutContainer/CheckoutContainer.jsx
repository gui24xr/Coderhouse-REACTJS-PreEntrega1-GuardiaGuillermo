import React from "react";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import CartContainer from "../CartContainer/CartContainer";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { getProductList } from "../../DATA/data_manager";
//Si la compra proviene de los botones 'Ir a carrito uso el cart , si es del articulo que estamos viendo y damos comprar usarmos singleBuyCart
import { getDocs, collection, addDoc, doc, setDoc, writeBatch, Timestamp } from 'firebase/firestore';
import { db } from '../../config/firebase'; //Referencia a la base de datos


const CheckoutContainer = () => {
    
    const {buyParam} = useParams() // console.log('parametro: ',buyParam)
    const { getCart, getCartAmount, getSingleBuyCart, getSingleBuyCartAmount, deleteCart, deleteSingleBuyCart } = useContext(CartContext);
    const orderList = buyParam === 'cart' ? getCart() : getSingleBuyCart()
    const orderAmount = buyParam === 'cart' ? getCartAmount() : getSingleBuyCartAmount()
    const [orderAddedID,setOrderAddedID] = useState()
    const [loading,setLoading] = useState(false)

    console.log('Or: ',orderList, orderAmount)
    async function createOrder (dataBuyer){
        
        setLoading(true)

        try{
            const orderObject ={
                    dataBuyer: dataBuyer, 
                    orderList: orderList,
                    orderAmount: orderAmount,
                    date: Timestamp.fromDate(new Date())
                }
            
                const orderAddedData = await addDoc(collection(db,'orders'), orderObject)
                console.log('Resuyltado primesa: ',orderAddedData)
                setOrderAddedID(orderAddedData.id)
                setLoading(false)
                //Actializo el stock

                //Limpio el carro ( la funcion que uso depende del parametro)
                console.log('Buy para :',buyParam)
                buyParam  === 'cart' ? deleteCart() : deleteSingleBuyCart()
            }
        catch{
            console.log(error=>error)
        }
   }



    //De los productos necesito informacion de los mismos,el tema es que me vienen en forma de promesa asique antes proceso
    return(
        <div className="w-full my-8 flex flex-row">
        {
           !orderAddedID 
           ? <>
                {!loading 
                ? 
                <>
                    <CartContainer productos={orderList}/>
                    <CheckoutForm  onConfirm={createOrder}/>
                </>
                :
                <SpinnerLoading/>}
            </> 
           : <span>Su compra se ah realizado y guardado bajo el identificador de orden {orderAddedID}</span>
               
        }
        </div>
    )
    
    }
  


export default CheckoutContainer;