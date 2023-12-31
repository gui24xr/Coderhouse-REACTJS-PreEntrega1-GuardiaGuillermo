import { createContext, useState, prev, useEffect } from "react";
import { getProductList } from "../DATA/data_manager";
import { quitarCaracterDolar } from "../global/funcions";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart,setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartAmount, setCartAmount] = useState(0)
    
    //Esto es para la compra de un articulo determinado sea uno o varias unidades
    const [singleBuyCart, setSingleBuyCart] = useState([]) 
    const [singleBuyAmoutCart,setSingleBuyAmountCart]=useState([])
    
    useEffect(()=>{
        //console.log('cambio cart')
        //viewCart()
        setCartCount(countCartItem(cart))
        setCartAmount(calcularTotalCart(cart))
        //Tengo que contar la cantidad
    },[cart])


    const countCartItem = (cart) =>{
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

    function addToSingleBuyCart(product, quantitySel, size) {

        //Antes que nada voy a setear el carro de compra unica a cero xq aca siemre solo se compra un articulo por separado

        setSingleBuyCart([]) //Borro si es que habia algo
        const nuevoProducto ={ productID:product.productID,
            quantity: quantitySel,
            size:size,
            productName: product.productName,
            productPrice: product.productPrice,
            productImage: product.imageSrc,
            subTotal: quantitySel * Number(quitarCaracterDolar(product.productPrice))
        }
        setSingleBuyCart((prev) => [...prev, nuevoProducto]) //Ingreso el nuevo y unico objeto
        setSingleBuyAmountCart(quantitySel * Number(quitarCaracterDolar(product.productPrice)))
    }






    const calcularTotalCart=(cart)=>{

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
    
    function getSingleBuyCart(){
        return singleBuyCart
    }

    function getSingleBuyCartAmount(){
        return singleBuyAmoutCart
    }
 
 
    function deleteCart(){
        setCart([])
    }

    function deleteSingleBuyCart(){
            setSingleBuyCart([])
    }

    const getCart = () => cart

    return(
        <CartContext.Provider value={{cartCount,getCart,viewCart,addCartItem,getCartAmount,
                                    getSingleBuyCartAmount, getSingleBuyCart, addToSingleBuyCart,
                                    deleteCart,deleteSingleBuyCart,
                                }}>
           {children}
        </CartContext.Provider>
    )
}