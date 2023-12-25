import { createContext, useState, prevState } from "react";

export const CartContext = createContext({cart:[]})



export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])
    const [cartLength, setCartLenght] = useState(0)

    const isInCart = (productID,size) =>{
        //Devuelve true o false si el producto de productID ya se encuentra en el carrito
        //console.log(cart.some((prod) => prod.productID === productID))
        return cart.some((prod) => prod.productID === productID && prod.size === size)
        
    }

    const addItem = ( productID,quantity,size ) =>{

        //Si el producto no esta en el carrito, lo agregamos junto a la cantidad y talle si viene.
        //Pero tambien tenemos la condicion de talles.. si hay talle distinto entonces se agrega nuevo
        if(!isInCart(productID,size)){
            setCart(prevState => [...prevState,{productID:productID,quantity: quantity,size:size}])
            //Recuento la cantidad de unidades y la reseteo para alimentar al contador de carrito
            setCartLenght(getCartSize())
        }

        //si el producto esta sumamos cantidad
        else{
           //Me posiciono en el producto dentro del carrito
            const productInCartIndex = cart.findIndex(item => item.productID == productID && item.size == size)
            //Ahora me posiciono en el objeto y le sumo la cantidad nueva a la antigua
            cart[productInCartIndex] = {productID:productID,
                                        quantity: cart[productInCartIndex].quantity + quantity,
                                        size:size}
            console.log('Posicion en carro del producto', productID,': ',productInCartIndex)
            //Recuento la cantidad de unidades y la reseteo para alimentar al contador de carrito
            setCartLenght(getCartSize())
        }

        
    }

    const viewCart = () => {
        console.log('Carrito: ', cart)
    }
    
    const getCartSize = () => {
        let cantidadDeElementos = 0; 
        //Voy a sumar item por item la cantidad de elementos
        cart.forEach(itemInCart => cantidadDeElementos = cantidadDeElementos + itemInCart.quantity)
        return cantidadDeElementos
    }

    const deleteCartItem = (productID,size) =>{
        //Me posiciono en el Item
        const productInCartIndex = cart.findIndex(item => item.productID == productID && item.size == size)
        //copio todo el carro pero borrando el elemento buscado para borrar de ahi y el resultado lo uso para reemplazar en el setCart
        let cartElements = cart
        cartElements.splice(productInCartIndex,1)
        setCart(cartElements)
        //Recuento la cantidad de unidades y la reseteo para alimentar al contador de carrito
        setCartLenght(getCartSize())
    }

    return(
        <CartContext.Provider value={{isInCart,viewCart,addItem,getCartSize,cartLength,deleteCartItem}}>
C            {children}
        </CartContext.Provider>
    )
}