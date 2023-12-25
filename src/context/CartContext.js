import { createContext, useState, prevState } from "react";

export const CartContext = createContext({cart:[]})

const a ='a123224'
const b ='b2'

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])

    const isInCart = (productID) =>{
        //Devuelve true o false si el producto de productID ya se encuentra en el carrito
        console.log(cart.some((prod) => prod.productID === productID))
        return cart.some((prod) => prod.productID === productID)
        
    }

    const addItem = ( productID,quantity,size ) =>{

        //Si el producto no esta en el carrito, lo agregamos junto a la cantidad y talle si viene.
        //if(!isInCart(productID)){
            setCart(prevState => [...prevState,{productID:productID,quantity: quantity,size:size}])
       // }

        //si el producto esta sumamos cantidad
      //  else{
            //Me posiciono en el producto dentro del carrito
          //  const productInCartIndex = cart.indexOf(prod => prod.productID = productID)
            //console.log('ya esta en el carro')
        //}

        
    }

    const viewCart = () => {
        console.log('Carrito: ', cart)
    }
    
    const getCartSize = () => cart.length

    return(
        <CartContext.Provider value={{a,b,isInCart,viewCart,addItem,getCartSize}}>
C            {children}
        </CartContext.Provider>
    )
}