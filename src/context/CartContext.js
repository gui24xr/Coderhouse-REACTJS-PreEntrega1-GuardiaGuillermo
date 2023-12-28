import { createContext, useState, prev, useEffect } from "react";
import { getProductList } from "../DATA/data_manager";
import { quitarCaracterDolar } from "../global/funcions";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])
    const [cartLength, setCartLenght] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    const [cartAmount, setCartAmount] = useState(0)

    useEffect(()=>{
        console.log('cambio cart')
        viewCart()
        setCartCount(countCartItem())
        setCartAmount(calcularTotalCart())
        //Tengo que contar la cantidad
    },[cart])


    const countCartItem = () =>{
        //Recuenta la cantidad de unidades que hay en el carrito y setea la cartCount para que se renderice en la notificacion de carrito.
        let cantElementos = 0
        cart.forEach(itemInCart => {
            cantElementos += itemInCart.quantity
        })
        console.log('Cantidad de ele: ', cantElementos)
        return cantElementos

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
  
}

    



    const calcularTotalCart=()=>{

        //Calcula el total de lo que hay en el carrito y setea la variable de estado correspondiente.
        if (cart.length>=1){
            let total = 0
            cart.forEach(item => total = total += item.subTotal)
            return total
        }
        else return 0
        
        
    }

    const viewCart = () => {
        console.log('Carrito: ', cart)
        
    }

    const getCartAmount = () => cartAmount
    
 



    const getCart = () => cart

    return(
        <CartContext.Provider value={{cartCount,getCart,viewCart,addCartItem,getCartAmount}}>
           {children}
        </CartContext.Provider>
    )
}