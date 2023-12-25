import { createContext, useState } from "react";



export const ItemDetailContext = createContext()


export const ItemDetailProvider = ({children}) => {

   
    
    const [selectedProductID, setSelectedProductID] = useState(0)
    const [selectedQuantity, setSelectedQuantity] = useState(0)
    const [selectedSize, setSelectedSize] = useState(null)
    const [availableStock, setAvailableStock] = useState(0)

   
    return(
        <ItemDetailContext.Provider 
        
            value={
                    {
                    selectedProductID,
                    setSelectedProductID, 
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