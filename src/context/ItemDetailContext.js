import { createContext, useState, useEffect } from "react";
import { useStock } from "../hooks/useStock";


export const ItemDetailContext = createContext()


export const ItemDetailProvider = ({children}) => {

   
    
    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState(null)
    const [availableStock, setAvailableStock] = useState(0)
    

   
    return(
        <ItemDetailContext.Provider 
        
            value={
                    {
                    selectedProduct,
                    setSelectedProduct, 
                    selectedQuantity, 
                    setSelectedQuantity,
                    selectedSize, 
                    setSelectedSize,
                    availableStock, 
                    setAvailableStock,
                    
                }
                }>
            {children}
        </ItemDetailContext.Provider>
    )
}