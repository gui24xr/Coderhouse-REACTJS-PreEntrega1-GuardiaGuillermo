import { createContext, useState, prev, useEffect } from "react";
import { getProductList } from "../DATA/data_manager";
import { quitarCaracterDolar } from "../global/funcions";

export const CartContext = createContext()



export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])
    const [cartLength, setCartLenght] = useState(0)
    const [cartAmount, setCartAmount] = useState(0)



    useEffect(()=>{

        console.log('cambio cart')
        viewCart()
    },[cart])

    const isInCart = (productID,size) =>{
        //Devuelve true o false si el producto de productID ya se encuentra en el carrito
        //console.log(cart.some((prod) => prod.productID === productID))
        return cart.some((prod) => prod.productID === productID && prod.size === size)
        
    }

   


    const addCartItem = ( product,quantitySel,size ) =>{
        //Si el producto no esta en el carrito, lo agregamos junto a la cantidad y talle si viene.
        //Pero tambien tenemos la condicion de talles.. si hay talle distinto entonces se agrega nuevo

        const nuevoProducto ={ productID:product.productID,
                                quantity: quantitySel,
                                size:size,
                                productName: product.productName,
                                productPrice: product.productPrice,
                                productImage: product.imageSrc,
                                subTotal: quantitySel * Number(quitarCaracterDolar(product.productPrice))
                }


                // Verificar si el producto ya está en el carrito
        const index = cart.findIndex((item) => item.productID === product.productID && item.size === size);

        if (index >= 0) {
            // Si el producto ya existe, actualizar la cantidad
            setCart((prev) => {
              const newCart = [...prev];
              newCart[index].quantity += quantitySel;
              return newCart;
            });
          } else {
            // Si el producto no existe, agregarlo al carrito
            setCart((prev) => [...prev, nuevoProducto]);
          }
        /*
        const cartCopy = cart
        const index = cartCopy.findIndex( item =>  item.productID === product.productID && item.size === size)
        if (index>=0) cartCopy[index].quantity = cartCopy[index].quantity + quantitySel
        
        !isInCart(product.productID,size) ? setCart(prev => [...prev,nuevoProducto]) : setCart(cartCopy)
        
         if (!isInCart(product.productID,size))setCart(prev => [...prev,nuevoProducto])
         else{
            setCart(cartCopy)
            //setCart(prev => [...prev,{}])
            //setCart(prev => [...prev,nuevoProducto])
            console.log('se metio al else')
           
        }
          */  
}

    



    const calcularTotalCart=()=>{

        //Calcula el total de lo que hay en el carrito y setea la variable de estado correspondiente.
        if (cart.length>=1){
            let total = 0
            cart.forEach(item => total = total + cart.subTotal)
            setCartAmount(total)
        }
        
    }

    const viewCart = () => {
        console.log('Carrito: ', cart)
        
    }

    const getCartAmount = () => cartAmount
    
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

    const getCart = () => cart

    return(
        <CartContext.Provider value={{cart,getCart,isInCart,viewCart,addCartItem,getCartSize,deleteCartItem,getCartAmount}}>
           {children}
        </CartContext.Provider>
    )
}