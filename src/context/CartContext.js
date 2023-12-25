import { createContext, useState, prevState } from "react";
import { getProductList } from "../DATA/data_manager";
import { quitarCaracterDolar } from "../global/funcions";

export const CartContext = createContext({cart:[]})



export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])
    const [cartLength, setCartLenght] = useState(0)
    const [cartAmount, setCartAmount] = useState(0)

    const isInCart = (productID,size) =>{
        //Devuelve true o false si el producto de productID ya se encuentra en el carrito
        //console.log(cart.some((prod) => prod.productID === productID))
        return cart.some((prod) => prod.productID === productID && prod.size === size)
        
    }

    const addItem = ( productID,quantity,size ) =>{

        //Si el producto no esta en el carrito, lo agregamos junto a la cantidad y talle si viene.
        //Pero tambien tenemos la condicion de talles.. si hay talle distinto entonces se agrega nuevo
        if(!isInCart(productID,size)){
           
            //Recuento la cantidad de unidades y la reseteo para alimentar al contador de carrito
            //setCartLenght(getCartSize())
            //Pido a la BD para el producto agregado la informacion de precio, imagen, etc para guardar en array.
            getProductList()
            .then(response => {
                    //Response es el array catalogo de productos
                 const indexInList = response.findIndex(item => item.productID == productID)
                 setCart(prevState => [...prevState,{productID:productID,
                                                        quantity: quantity,
                                                        size:size,
                                                        productName: response[indexInList].productName,
                                                        productPrice: response[indexInList].productPrice,
                                                        productImage: response[indexInList].imageSrc,
                                                        subTotal: quantity * Number(quitarCaracterDolar(response[indexInList].productPrice)),
                                                    }])
                 setCartLenght(getCartSize())
                 //Calculo los totales
                 
                 viewCart()


            })
           
        }

        //si el producto esta sumamos cantidad
        else{
           //Me posiciono en el producto dentro del carrito
            const productInCartIndex = cart.findIndex(item => item.productID == productID && item.size == size)
            //Ahora me posiciono en el objeto y le sumo la cantidad nueva a la antigua
             
                cart[productInCartIndex].quantity = cart[productInCartIndex].quantity + quantity
                                        
            console.log('Posicion en carro del producto', productID,': ',productInCartIndex)
            //Recuento la cantidad de unidades y la reseteo para alimentar al contador de carrito
            setCartLenght(getCartSize())
            viewCart()
            calcularTotalCart()
            
        }
        //Muestro el carro.
        
        
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
        <CartContext.Provider value={{getCart,isInCart,viewCart,addItem,getCartSize,cartLength,deleteCartItem,getCartAmount}}>
C            {children}
        </CartContext.Provider>
    )
}